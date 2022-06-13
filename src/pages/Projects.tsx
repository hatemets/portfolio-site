import ProjectCard from "../components/ProjectCard"
import towerDefensePic from "../media/images/tower_defense_showcase.png"


const Projects = () => {
    return (
        <div id="projects">
            <div className="wrapper">
                <h1>Projects</h1>

                <ProjectCard
                    title="Tower Defense Game"
                    src={towerDefensePic}
                    technologies={["C++", "SFML", "Makefile"]}
                    details={[
                        "Course project",
                        "One of the two developers",
                        "OOP design",
                        "Complies with RAII principle",
                        "Various levels, turrets & enemies"
                    ]}
                    githubLink="https://github.com/hatemets/tower-defense-game"
                />

            </div>
        </div>
    )
}


export default Projects
