import fetch from 'node-fetch'
const isBase64 = require('is-base64')
const sgMail = require('@sendgrid/mail')

const EMAIL_API_KEY = process.env.EMAIL_API_KEY
const CAPTCHA_KEY = process.env.CAPTCHA_KEY
const FROM_EMAIL_ADDRESS = process.env.FROM_EMAIL_ADDRESS
const TO_EMAIL_ADDRESS = process.env.TO_EMAIL_ADDRESS

export const sendEmail = async ({
  name,
  phone,
  place,
  info,
  file,
  email,
  captcha,
}) => {
  let attachment = null
  let fileName = ''
  let fileType = ''
  let fileTypeHtml = ''

  const isHuman = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
      body: `secret=${CAPTCHA_KEY}&response=${captcha}`,
    }
  )
    .then((res) => res.json())
    .then((json) => json.success)
    .catch((err) => {
      throw new Error(`Error in Google Siteverify API. ${err.message}`)
    })

  if (isHuman) {
    if (file) {
      const isBase = isBase64(file, { mimeRequired: true })
      if (isBase) {
        fileType = isFileImage(file)
        if (fileType) {
          // const newFile = decodeBase64Image(file)
          // attachment = newFile ? newFile : null
          attachment = file.split(',')[1]
          fileName = 'skra.' + fileType
          fileTypeHtml = getFileTypeHtml(fileType)
        }
      }
    }

    const attachments =
      attachment &&
      isBase64(file, { mimeRequired: true }) &&
      fileName &&
      fileTypeHtml
        ? [
            {
              content: attachment,
              filename: fileName,
              type: fileTypeHtml,
              disposition: 'attachment',
            },
          ]
        : []

    sgMail.setApiKey(EMAIL_API_KEY)

    const content = {
      to: TO_EMAIL_ADDRESS,
      from: email,
      subject: `Skilaboð frá: ${email}`,
      html: `
      <div>
        <p>Nafn: ${name}</p>
        <p>Netfang: ${email}</p>
        <p>Sími: ${phone}</p>
        <p>Staðsetning: ${place}</p>
        <p>Upplýsingar: ${info}</p>
      </div>
      `,
      attachments: attachments,
    }

    try {
      const mailResponse = await sgMail.send(content)
      if (mailResponse && mailResponse.length > 0) {
        return mailResponse[0]
      } else {
        return false
      }
    } catch (error) {
      console.log('ERROR', error?.response?.body?.errors)
      console.log('ERROR', error)
      return false
    }
  }
}

function isFileImage(str) {
  const type = str.substring('data:image/'.length, str.indexOf(';base64'))
  if (type === 'jpeg' || type === 'png' || type === 'jpg') {
    return type
  } else {
    return null
  }
}

function getFileTypeHtml(extension) {
  if (extension === 'jpg' || extension === 'jpeg') {
    return 'image/jpeg'
  } else if (extension === 'png') {
    return 'image/png'
  }
}
