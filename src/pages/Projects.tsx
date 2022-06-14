import ProjectCard from "../components/ProjectCard"
import towerDefensePic from "../media/images/tower_defense_showcase.png"
import tennisPredictionPic from "../media/images/tennis_prediction_plots.png"
import personalWebsitePic from "../media/images/personal_website.png"


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
                    src={tennisPredictionPic}
                    technologies={["Python", "Jupyter", "Sci-kit", "Numpy"]}
                    details={[
                        "ML methods used:",
                        ["Logistic Regression", "SVM", "Decision Tree", "K-nearest neighbors"],
                        "Analyzed 400,000+ ATP matches",
                        "Final accuracy of 69.3%"
                    ]}
                    githubLink="https://github.com/hatemets/tennis-prediction"
                />

                <ProjectCard
                    title="Personal Website"
                    src={personalWebsitePic}
                    technologies={["HTML/JSX", "CSS/SASS", "JavaScript", "TypeScript", "React"]}
                    details={[
                        "Custom styling with SASS",
                        "Uses React Hooks",
                        "Type checking with TypeScript",
                        "Integrated emailing API",
                        "Search Engine Optimization"
                    ]}
                    githubLink="https://github.com/hatemets/tennis-prediction"
                />

            </div>
        </div>
    )
}


export default Projects
