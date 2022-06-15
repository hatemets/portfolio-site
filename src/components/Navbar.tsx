import { Link } from "react-router-dom"
import "../styles/Navbar.scss"
import InitialsLogo from "../components/InitialsLogo"
import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import { Spin as Hamburger } from "hamburger-react"


const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        // Disable scrolling while sidemenu is open
        window.document.body.style["overflow"] = (isOpen) ? "hidden" : "auto"
    }, [isOpen])

    return (
        <>
            <nav id="nav">
                <Link onClick={() => setOpen(false)} to="/" id="logo-link">
                    <InitialsLogo />
                </Link>

                <span id="menu-icon">
                    <Hamburger rounded size={40} color="#dedede" toggled={isOpen} toggle={setOpen} />
                </span>

                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
            <Sidebar isOpen={isOpen} setOpen={setOpen} />
        </>
    )
}


export default Navbar
