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
        // emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        // .then(result => console.log(result.text), error => console.log(error.text))

        try {
            const res = await emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            setSubmitted(true)
            console.log("Mail sent successfully!")
            console.log(res)
        }
        catch (err) {
            console.error("There was an error with sending the form.")
            console.error(err)
        }

    }

    // useEffect(() => {
    //     console.log(process.env.REACT_APP_PUBLIC_KEY)
    //     console.log(process.env)
    // }, [])

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <div>
                <label>Name</label>
                <input type="text" name="user_name" />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="user_email" />
            </div>
            <div>
                <label>Message</label>
                <textarea name="message"></textarea>
            </div>
            <input type="submit" value="Send" />
        </form>
    )
}

export default ContactForm
