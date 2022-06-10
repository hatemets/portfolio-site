import { Link } from "react-router-dom"
import "../styles/Navbar.scss"
import "../styles/general.scss"
import InitialsLogo from "../components/InitialsLogo"


const Navbar = () => {
    return (
        <nav id="nav">
            <Link to="/" id="logo-link">
                <InitialsLogo />
            </Link>

            <div className="links">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    )
}


export default Navbar
