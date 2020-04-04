import React, { useState } from "react"
import emailjs from "emailjs-com"
import ReCaptcha from "react-google-recaptcha"
import Navbar from "../components/Navbar"

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
    <>
      <Navbar />
      <section id="contact" className="contact">
        <div className="contact__box">
          <div className="contact__content">
            <h3 className="contact--title">Contact</h3>

            <form className="contact__form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <label htmlFor="user_name">Name</label>
              <input
                value={input.name}
                onChange={e => setInput({ ...input, name: e.target.value })}
                type="text"
                name="user_name"
              />
              <label htmlFor="user_email">Email</label>
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
              <ReCaptcha
                className="contact__form--recaptcha"
                sitekey={process.env.RECAPTCHA_SITE_KEY}
              />

              <input
                className="contact__form--btn"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
