// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

import { sendEmail } from '../../utils/sendEmailSendgrid'
const xss = require('xss')

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    let { name, email, phone, place, info } = req.body
    let { file, captcha } = req.body

    if (!name || !email || !info) {
      return res.send(400)
    }

    name = xss(name)
    email = xss(email)
    phone = xss(phone)
    place = xss(place)
    info = xss(info)
    captcha = xss(captcha)

    const response = await sendEmail({
      name,
      email,
      phone,
      place,
      info,
      file,
      captcha,
    })
    if (
      response &&
      (response.statusCode === 202 || response.statusCode === 200)
    ) {
      return res.status(200).end()
    } else {
      return res.status(400).end()
    }
  }
  return res.status(404).json({
    error: {
      code: 'not_found',
      messgae:
        "The requested endpoint was not found or doesn't support this method.",
    },
  })
}
