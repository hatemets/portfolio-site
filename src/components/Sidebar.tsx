import { Link } from "react-router-dom"

const SideBar = ({ isOpen, setOpen }) => {
    return (
        <>
            { isOpen && 
            <div id="sidebar">
                <div className="container">
                    <Link onClick={() => setOpen(false)} to="/">Home</Link>
                    <Link onClick={() => setOpen(false)} to="/projects">Projects</Link>
                    <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
                </div>
            </div>
            }
        </>
    )
}


export default SideBar
