import React, { useState } from "react"
import emailjs from "emailjs-com"
import ReCaptcha from "react-google-recaptcha"

const Contact = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        message: "",
        recaptcha: false
    })

    function canSubmit() {
        let { name, email, message, recaptcha } = input;
        if( name.length > 0 && email.length > 0 && message.length > 0 && recaptcha ){
            return true;
        } else {
            return false;
        }
    }

    function sendEmail(e) {
        e.preventDefault()

        emailjs
            .sendForm("gmail", "portfolio", e.target, process.env.GATSBY_EMAILJS_USER_ID)
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
        <section id="contact" className="contact">
            <div className="contact__content">
                <h2 className="contact--title">Contact</h2>

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
                        sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
                        onChange={() => setInput({...input, recaptcha: true})}
                    />

                    { canSubmit() ? (
                        <button
                        className="contact__form--btn"
                        type="submit"
                    >Send</button>
                    ) : (
                        <button
                        className="contact__form--btn contact__form--disabled"
                        type="submit"
                        disabled
                    >Please fill out the form</button>
                    ) }

                    
                </form>
            </div>            
        </section>
    )

}

export default Contact;