import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

const serviceID: string = process.env.REACT_APP_SERVICE_ID
const templateID: string = process.env.REACT_APP_TEMPLATE_ID
const publicKey: string = process.env.REACT_APP_PUBLIC_KEY

// NB! .env must exist with the mentioned values
const ContactForm = () => {
    const form = useRef();

    const sendEmail = async (event: any) => {
        await event.preventDefault()

        try {
            await emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            alert("Mail sent successfully!")
            console.log("success")
        }
        catch (err) {
            alert("There was an error with sending the form.")
            console.error(err)
        }
    }


    return (
        <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="user_name" required />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="user_email" required />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" required ></textarea>
            </div>
            <div>
                <button type="submit">Send message</button>
            </div>
        </form>
    )
}

export default ContactForm
