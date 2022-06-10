import { Link } from "react-router-dom"
import "../styles/Navbar.scss"
import "../styles/general.scss"
import InitialsLogo from "../components/InitialsLogo"
import SideMenuIcon from "../components/SideMenuIcon"
import { useState, useEffect } from "react"


const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <nav id="nav">
            <Link to="/" id="logo-link">
                <InitialsLogo />
            </Link>

            <SideMenuIcon toggle={() => setOpen(!isOpen)} />

            <div className="links">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    )
}


export default Navbar
