import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"

const FORM_ENDPOINT = ""

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmitted(true)
        console.log("sent")
    }

    useEffect(() => {
        console.log(process.env.REACT_APP_PUBLIC_KEY)
        console.log(process.env)
    }, [])

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <div>
                <h1>{ process.env.REACT_APP_PUBLIC_KEY}</h1>
                <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    required
                />
            </div>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                />
            </div>
            <div>
                <textarea
                    placeholder="Your message"
                    name="message"
                    required
                />
            </div>
            <div>
                <input type="submit" value="Send message" />
            </div>
        </form>
    )
}

export default ContactForm
