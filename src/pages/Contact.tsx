import ContactForm from "../components/ContactForm"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
import { faGithubSquare, faLinkedin, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


const Contact = () => {
    const size = "3x"
    const email = "heidmets.mark@gmail.com" 

    const handleEmailClick = async (event: any) => {
        if (navigator.clipboard) {
            try {
                await event.preventDefault();
                await navigator.clipboard.writeText(email)

                toast.success("Email copied to clipboard!", {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                })
            }
            catch (err) {
                alert("Something went wrong!")
            }
        }
    }

    return (
        <div id="contact">
            <div className="wrapper">
                <h1 className="page-title">Contact me</h1>

                <ContactForm />

                <div className="breakline" />

                <h3 className="sub-title">You can also reach me via the following platforms:</h3>

                <ul id="media">
                    <li>
                        <a href="mailto:heidmetsmark@gmail.com">
                            <FontAwesomeIcon className="icon email-icon" size={size} icon={faEnvelopeSquare} />
                            <div onClick={handleEmailClick} id="email-box">
                                <p>{ email }</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/hatemets">
                            <FontAwesomeIcon className="icon github-icon" size={size} icon={faGithubSquare} />
                            <p>Github</p>
                        </a>
                    </li>
                    <li>
                        <a className="linkedin-link" href="https://www.linkedin.com/in/mark-heidmets-969006195/">
                            <FontAwesomeIcon className="icon linkedin-icon" size={size} icon={faLinkedin} />
                            <p>LinkedIn</p>
                        </a>
                    </li>
                    <li>
                        <a className="facebook-link" href="https://facebook.com/hatemets">
                            <FontAwesomeIcon className="icon facebook-icon" size={size} icon={faFacebookSquare} />
                            <p>Facebook</p>
                        </a>
                    </li>
                </ul>
            </div>
            <ToastContainer
                theme="dark"
                position="top-center"
                autoClose={1000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
        </div>
    )
}


export default Contact
