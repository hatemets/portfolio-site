import { Link } from "react-router-dom"
import "../styles/Navbar.scss"
import InitialsLogo from "../components/InitialsLogo"
import SideMenuIcon from "../components/SideMenuIcon"
import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar"


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

                <SideMenuIcon toggle={() => setOpen(!isOpen)} />

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
