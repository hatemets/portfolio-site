import { Link } from "react-router-dom"
import "../styles/Navbar.scss"
import "../styles/general.scss"


const Navbar = () => {
    return (
        <nav id="nav">
            <Link to="/" id="logo-link">
                <svg
                    id="logo"
                    width="50"
                    height="50"
                    viewBox="0 0 100 100"
                >
                    <path
                        d="M 10 80 L 10 20 L 34 58 L 58 14 L 58 80 L 58 50 L 90 50 L 90 14 L 90 80"
                        stroke="#eee"
                        stroke-width="5"
                        fill="transparent"
                    />
                </svg>
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
