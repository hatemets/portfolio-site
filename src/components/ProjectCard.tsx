import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const ProjectCard = ({ title, src, technologies, details, githubLink }) => {
    return (
        <div className="project-card">
            <h1 className="project-title">{ title }</h1>
            <img src={src} alt="Project demo"/>
            <div className="details">
                <ul className="details-list">
                    {
                        details.map((info: string) => <li>{ info }</li>)
                    }
                </ul>
            </div>
            <div className="technical-info">
                <a className="github-container" href={githubLink}>
                    <FontAwesomeIcon className="icon github-icon" size="2x" icon={faGithub} />
                    <p>Source Code</p>
                </a>
                <h3 className="technologies-title">Technologies & Languages</h3>
                <ul className="technologies-list">
                    {
                        technologies.map((technology: string) => <li>{ technology }</li>)
                    }
                </ul>
            </div>
        </div>
    )
}


export default ProjectCard
