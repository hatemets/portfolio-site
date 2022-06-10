import { Link } from "react-router-dom"

const SideBar = ({ isOpen }) => {
    const display = isOpen ? "block" : "none"

    return (
        <div style={{ display }} id="sidebar">
            <div className="container">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </div>
    )
}


export default SideBar
