import React, { useState, useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"

const FORM_ENDPOINT = ""
const serviceID = process.env.REACT_APP_SERVICE_ID
const templateID = process.env.REACT_APP_TEMPLATE_ID
const publicKey = process.env.REACT_APP_PUBLIC_KEY

// NB! .env must exist with the mentioned values
const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)
    const form = useRef();

    const sendEmail = async (event: any) => {
        await event.preventDefault()

        try {
            const res = await emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            setSubmitted(true)
            alert("Mail sent successfully!")
        }
        catch (err) {
            alert("There was an error with sending the form.")
            console.error(err)
        }
    }


    return (
        <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <div>
                <label>Name</label>
                <input type="text" name="user_name" />
            </div>
            <div>
                <label>Email</label>
                <input type="email" placeholder="Email" name="user_email" />
            </div>
            <div>
                <label>Message</label>
                <textarea name="message"></textarea>
            </div>
            <div>
                <input type="submit" value="Send" />
            </div>
        </form>
    )
}

export default ContactForm
