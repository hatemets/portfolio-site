import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    const size = "3x"

    return (
        <footer id="footer">
            <div className="container">
                <a href="mailto:heidmetsmark@gmail.com">
                    <FontAwesomeIcon className="icon email-icon" size={size} icon={faEnvelope} />
                </a>

                <a href="https://github.com/hatemets">
                    <FontAwesomeIcon className="icon github-icon" size={size} icon={faGithub} />
                </a>

                <a className="linkedin-link" href="https://www.linkedin.com/in/mark-heidmets-969006195/">
                    <FontAwesomeIcon className="icon linkedin-icon" size={size} icon={faLinkedin} />
                </a>
            </div>
        </footer>
    )
}


export default Footer
