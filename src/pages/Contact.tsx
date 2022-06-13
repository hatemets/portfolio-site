import ContactForm from "../components/ContactForm"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
    const size = "3x"

    return (
        <div id="contact">
            <div className="wrapper">
                <h1 className="page-title">Contact me</h1>

                <ContactForm />

                <h3 className="sub-title">You can also reach me via the following media:</h3>
                <ul id="media">
                    <li>
                        <a href="mailto:heidmetsmark@gmail.com">
                            <FontAwesomeIcon className="icon email-icon" size={size} icon={faEnvelope} />
                            <p>Email</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/hatemets">
                            <FontAwesomeIcon className="icon github-icon" size={size} icon={faGithub} />
                            <p>Github</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mark-heidmets-969006195/">
                            <FontAwesomeIcon className="icon linkedin-icon" size={size} icon={faLinkedin} />
                            <p>LinkedIn</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com/hatemets">
                            <FontAwesomeIcon className="icon facebook-icon" size={size} icon={faFacebook} />
                            <p>Facebook</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Contact
