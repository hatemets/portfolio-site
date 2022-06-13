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
                        "Follows the RAII principle",
                        "Various levels, turrets & enemies"
                    ]}
                    githubLink="https://github.com/hatemets/tower-defense-game"
                />

                <ProjectCard
                    title="Tennis prediction with Machine Learning"
                    src={towerDefensePic}
                    technologies={["Python", "Jupyter Notebook", "Sci-kit", "Numpy", "csv"]}
                    details={[
                        "Implemented several ML methods",
                        ["Logistic Regression", "SVM", "Decision Tree", "K-nearest neighbors"],
                        "Analyzed 400,000+ ATP matches",
                        "Final accuracy of 69.3%"
                    ]}
                    githubLink="https://github.com/hatemets/tower-defense-game"
                />

            </div>
        </div>
    )
}


export default Projects
