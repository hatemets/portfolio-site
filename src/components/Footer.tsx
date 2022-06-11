import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "../styles/Footer.scss"

const Footer = () => {
    const size = "3x"

    return (
        <div id="footer">
            <a href="mailto:heidmetsmark@gmail.com">
                <FontAwesomeIcon id="email" size={size} icon={faEnvelope} />
            </a>

            <a href="https://github.com/hatemets">
                <FontAwesomeIcon id="github" size={size} icon={faGithub} />
            </a>

            <a id="linkedin-link" href="https://www.linkedin.com/in/mark-heidmets-969006195/">
                <FontAwesomeIcon id="linkedin" size={size} icon={faLinkedin} />
            </a>
        </div>
    )
}


export default Footer
