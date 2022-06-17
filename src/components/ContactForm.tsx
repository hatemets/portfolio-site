import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import PuffLoader from "react-spinners/PuffLoader"
import { useState, useEffect, useRef } from "react"


const serviceID: string = process.env.REACT_APP_SERVICE_ID
const templateID: string = process.env.REACT_APP_TEMPLATE_ID
const publicKey: string = process.env.REACT_APP_PUBLIC_KEY


// NB! .env must exist with the mentioned values
const ContactForm = () => {
    const form = useRef()
    const [isSending, setSending] = useState(false)
    const [size, setSize] = useState(0)
    const buttonRef = useRef(null)

    useEffect(() => {
        setSize(buttonRef.current.getBoundingClientRect().height)
        console.log(buttonRef.current.getBoundingClientRect().height)
    }, [])

    const sendEmail = async (event: any) => {
        await event.preventDefault()

        try {
            // Send the email
            setSending(true)
            await emailjs.sendForm(serviceID, templateID, form.current, publicKey)

            toast.success("Mail sent successfully!", {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })

            setSending(false)

            // Reset the fields
            event.target.reset()
        }
        catch (err) {
            toast.error("There was a problem sending the message.", {
                position: "top-center",
                autoClose: 4000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })
            // console.error(err)
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
            <div id="form-send-wrapper">
                <button ref={buttonRef} style={{ display: isSending ? "none" : "initial" }} type="submit">Send message</button>
                <PuffLoader color="darkorange" loading={isSending} size={size} />
            </div>
        </form>
    )
}

export default ContactForm
