import "../styles/index.scss"
import "../styles/Home.scss"
import profilePic from "../media/images/profilepic.jpg"

const Home = () => {
    return (
        <div id="home">
            <div className="wrapper">
                <h1 id="greeting-title">Hey, I'm Mark.</h1>

                <img id="profile-pic" src={profilePic} alt="Profile" />

                <p className="greeting-text">I'm an Estonian data science student based in Finland. I love creating software ranging from video games to full-stack web applications.</p>

                <p className="regular-text">
                    On this website, I try my best to give you an insight into my interests, skills, and doings.
                    In a way, it serves as an informal resume showcasing my skills and various projects that I've been working on.
                </p>
            </div>
        </div>
    )
}


export default Home
