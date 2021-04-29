import React from 'react'
import MainInput from './mainInput'
import { sendEmailApi } from './../utils/api'
import ReCAPTCHA from 'react-google-recaptcha'
const emailValidator = require('email-validator')
const CAPTCHA_PUBLIC_KEY = process.env.NEXT_PUBLIC_CAPTCHA_PUBLIC_KEY

const contactBox = ({ showContact, setShowContact, onShowAlertPress }: any) => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [place, setPlace] = React.useState('')
  const [info, setInfo] = React.useState('')
  const [file, setFile] = React.useState(null)
  const [captcha, setCaptcha] = React.useState('')

  const convertToBase64 = (fileData) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(fileData)

      reader.onload = () => {
        setFile(reader.result)
        resolve(reader.result)
      }
      reader.onerror = (error) => {
        setFile('')
        reject(error)
      }
    })
  }

  const submitForm = async () => {
    if (name && name.length > 2) {
      if (email && email.length > 2 && emailValidator.validate(email)) {
        if (info && info.length > 2) {
          if (captcha && captcha.length > 4) {
            const result = await sendEmailApi({
              name,
              email,
              phone,
              place,
              info,
              file,
              captcha: captcha,
            })
            console.log('result form: ', result)
            if (result && result.status === 200) {
              if (showContact) {
                setShowContact(false)
              }
              onShowAlertPress(
                'Skilaboð hefur verið sent. Við verðum í sambandi!',
                'success'
              )
              setTimeout(() => {
                window.location.reload()
              }, 3000)
            } else {
              onShowAlertPress(
                'Það tókst ekki að senda skilaboð. Vinsamlegast reyndu aftur eða sendu tölvupóst á slattur@slatturogsmaverk.is',
                'error'
              )
            }
          } else {
            onShowAlertPress(
              'Vinsamlegast staðfestu að þú ert ekki vélmenni',
              'error'
            )
          }
        } else {
          onShowAlertPress(
            'Vinsamlegast bættu við upplýsingum um fyrirspurnina þína',
            'error'
          )
        }
      } else {
        onShowAlertPress('Vinsamlegast bættu við löglegu netfangi', 'error')
      }
    } else {
      onShowAlertPress('Vinsamlegast bættu við nafninu þínu', 'error')
    }
  }

  function setEmailMain(value) {
    setEmail(value)
    if (value && value.length > 3 && !showContact) {
      setShowContact(true)
    } else if ((!value || (value && value.length) < 4) && showContact) {
      setShowContact(false)
    }
  }

  return (
    <div>
      <aside className="contact__wrapper">
        <div
          id="contact-container"
          className={
            showContact ? 'contact__container bigger' : 'contact__container'
          }
        >
          <div className="contact__box-container">
            {!showContact ? (
              <p className="contact__title">Hafa samband</p>
            ) : null}
            <MainInput
              id="name"
              value={name}
              setValue={setName}
              placeholder="Nafn *"
            />
            <MainInput
              id="email"
              value={email}
              setValue={setEmailMain}
              placeholder="Netfang *"
            />
            <MainInput
              id="phone"
              isNumberOnly={true}
              value={phone}
              setValue={setPhone}
              placeholder="Sími"
            />
            <MainInput
              id="place"
              value={place}
              setValue={setPlace}
              placeholder="Staðsetning"
            />
            <label htmlFor="info" className="hidden">
              Upplýsingar
            </label>
            <textarea
              id="info"
              rows={4}
              cols={4}
              onChange={(e) => {
                setInfo(e.target.value)
              }}
              name="info"
              placeholder="Upplýsingar *"
              className="contact__input contact__textarea"
            ></textarea>
            <label htmlFor="file" className="hidden">
              File
            </label>

            {showContact ? (
              <div className="contact__file-upload-container">
                <label htmlFor="file" className="contact__file-upload-label">
                  Viðhengi
                </label>
                <input
                  type="file"
                  name="file"
                  className="contact__file-upload"
                  accept="image/x-png,image/jpeg"
                  id="file"
                  onChange={async (e) => {
                    if (e && e.target.files.length > 0) {
                      const fileData = e.target.files[0]
                      await convertToBase64(fileData)
                    }
                  }}
                />
                <ReCAPTCHA
                  sitekey={CAPTCHA_PUBLIC_KEY}
                  onChange={(value) => {
                    setCaptcha(value)
                  }}
                />
              </div>
            ) : null}

            <a
              onClick={() => {
                submitForm()
              }}
              className="contact__btn"
            >
              Senda
            </a>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default contactBox
