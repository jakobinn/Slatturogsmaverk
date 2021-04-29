export const sendEmailApi = async ({
  name,
  email,
  phone,
  place,
  info,
  file,
  captcha,
}) => {
  try {
    const result = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone,
        place,
        info,
        file,
        captcha,
      }),
    })
    return result
  } catch (err) {
    return null
  }
}
