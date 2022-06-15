import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div id="not-found">
            <div className="wrapper">
                <h1 className="page-title">Oops, it's a 404!</h1>
                <h3 className="message">No such page exists on this site.</h3>
                <Link className="to-home" to="/">Back to home</Link>
            </div>
        </div>
    )
}


export default NotFound
