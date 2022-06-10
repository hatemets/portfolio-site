import { Link } from "react-router-dom"
import "../styles/Navbar.scss"
import InitialsLogo from "../components/InitialsLogo"
import SideMenuIcon from "../components/SideMenuIcon"
import { useState } from "react"
import Sidebar from "../components/Sidebar"


const Navbar = () => {
    const [isOpen, setOpen] = useState(true)

    return (
        <nav id="nav">
            <Link to="/" id="logo-link">
                <InitialsLogo />
            </Link>

            <SideMenuIcon toggle={() => setOpen(!isOpen)} />
            <Sidebar isOpen={isOpen} />

            <div className="links">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    )
}


export default Navbar
