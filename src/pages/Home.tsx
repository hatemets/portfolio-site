import Hobbies from "../components/Hobbies"
import Skills from "../components/Skills"
import { Helmet } from "react-helmet"

const descriptionText = "I'm a data science student based in Finland. I love creating software ranging from video games to full-stack web applications."

const Home = () => {
    return (
        <div id="home">
            <Helmet>
                <title>Home | Mark Heidmets</title>
                <meta
                    name="description"
                    content={`My name's Mark Heidmets ${descriptionText}`}
                />
            </Helmet>
            <div className="wrapper">
                <h1 id="greeting-title">Hey, I'm Mark.</h1>

                <img id="profile-pic" src="/profilepic.jpg" alt="Profile" />

                <p className="greeting-text">
                    { descriptionText }
                </p>

                <p id="website-paragraph" className="regular-text">
                    In a way, this website serves as an informal resume showcasing my skills and various projects that I've been working on.
                </p>

                <h3 id="about-me">More about me</h3>
                <p id="about-me-text" className="regular-text">
                    Originally from Estonia, I came to Finland to study data science at Aalto University.
                    I'm passionate about statistics, machine learning, and full-stack web development.
                    I've been programming for 4 years and during that time, I've learned to create full-stack web apps, browser automating tools, video games, and machine learning models.
                </p>

                <Skills />

                <Hobbies />
            </div>
        </div>
    )
}


export default Home
