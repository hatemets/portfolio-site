import ContactForm from "../components/ContactForm"


const Contact = () => {
    return (
        <div id="contact">
            <div className="wrapper">
                <h1 className="page-title">Contact me</h1>

                <ContactForm />

                <h3 className="sub-title">You can also reach me via the following media:</h3>
                <ul>
                    <li>Github</li>
                    <li>Email</li>
                    <li>LinkedIn</li>
                    <li>Facebook</li>
                </ul>
            </div>
        </div>
    )
}


export default Contact
