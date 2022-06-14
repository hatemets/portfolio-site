import { Link } from "react-router-dom"

const SideBar = ({ isOpen, setOpen }) => {
    const display = isOpen ? "block" : "none"

    return (
        <div style={{ display }} id="sidebar">
            <div className="container">
                <Link onClick={() => setOpen(false)} to="/">Home</Link>
                <Link onClick={() => setOpen(false)} to="/contact">Contact Me</Link>
                <Link onClick={() => setOpen(false)} to="/projects">Projects</Link>
            </div>
        </div>
    )
}


export default SideBar
