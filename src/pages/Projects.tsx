import ProjectCard from "../components/ProjectCard"
import towerDefensePic from "../media/images/tower_defense_showcase.png"


const Projects = () => {
    return (
        <div id="projects">
            <div className="wrapper">
                <h1>Projects</h1>
                {/* <p className="regular-text"> */}
                {/*     Here are some of the projects I've been working on. */}
                {/*     To see all of my repositories, visit my <a className="regular-link" href="https://github.com/hatemets">GitHub page</a>. */}
                {/* </p> */}

                <ProjectCard
                    title="Tower Defense Game"
                    src={towerDefensePic}
                    technologies={["C++", "SFML", "Makefile"]}
                    details={["Course project", "One of the two developers"]}
                    githubLink="https://github.com/hatemets/tower-defense-game"
                />

            </div>
        </div>
    )
}


export default Projects
