import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const ProjectCard = ({ title, src, technologies, details, githubLink }) => {
    return (
        <div className="project-card">

            <h1 className="project-title">{ title }</h1>

            <img src={src} alt="Project demo"/>

            <div className="details">
                <div className="general-details">
                    <ul className="details-list">
                        {
                            details.map((info: (string | string[])) =>
                                        (typeof info === "string")
                                            ? <li>{ info }</li>
                                            : <ul className="sub-list">{ info.map((el: string) => <li>{ el }</li>)}</ul>
                                       )
                        }
                    </ul>
                </div>

                <div className="technical-info">
                    <a target="_blank" rel="noreferrer" className="git-container" href={githubLink}>
                        <FontAwesomeIcon className="icon github-icon" size="2x" icon={faGithub} />
                        <p>Source</p>
                    </a>
                    <div className="technologies-list-container">
                        <h3 className="technologies-title">Technologies</h3>
                        <ul className="technologies-list">
                            {
                                technologies.map((technology: string) => <li>{ technology }</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProjectCard
