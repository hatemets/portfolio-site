import ProjectCard from "../components/ProjectCard"


const Projects = () => {
    return (
        <div id="projects">
            <div className="wrapper">
                <h1 className="page-title">Projects</h1>

                <ProjectCard
                    title="Tower Defense Game"
                    src="tower_defense_showcase.png"
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
                    src="tennis_prediction_plots.png"
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
                    src="personal_website_img.png"
                    technologies={["HTML/JSX", "CSS/SASS", "JavaScript", "TypeScript", "React"]}
                    details={[
                        "Built with React Hooks",
                        "Responsive design",
                        "Type checking with TypeScript",
                        "Integrated emailing API"
                    ]}
                    githubLink="https://github.com/hatemets/portfolio-site"
                />

            </div>
        </div>
    )
}


export default Projects
