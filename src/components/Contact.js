import React, { useState } from "react"
import emailjs from "emailjs-com"
import ReCaptcha from "react-google-recaptcha"

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  })

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm("gmail", "portfolio", e.target, process.env.EMAILJS_USER_ID)
      .then(
        result => {
          console.log(result.text)
          setInput({
            name: "",
            email: "",
            message: "",
          })
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <div id="contact" className="contact">
      <h2 className="contact__header">Contact</h2>

      <form className="contact__form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label htmlFor="user_name">Name</label>
        <input
          value={input.name}
          onChange={e => setInput({ ...input, name: e.target.value })}
          type="text"
          name="user_name"
        />
        <label htmlFor="user_emaile">Email</label>
        <input
          value={input.email}
          onChange={e => setInput({ ...input, email: e.target.value })}
          type="email"
          name="user_email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          value={input.message}
          onChange={e => setInput({ ...input, message: e.target.value })}
          name="message"
        />
        <ReCaptcha sitekey={process.env.RECAPTCHA_SITE_KEY} />
        <input className="contact__form--btn" type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact
