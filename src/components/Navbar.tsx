import { Link } from "react-router-dom"
import "../styles/Navbar.scss"


const Navbar = () => {
    return (
        <nav id="nav">
            <Link to="/" id="logo">Logo</Link>

            <div className="links">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    )
}


export default Navbar
