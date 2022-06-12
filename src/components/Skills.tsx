const Skills = () => {
    return (
        <div id="skills">
            <h4 className="section-title">Skills & technologies</h4>
            <ul className="list">
                <li>
                    <h6 className="sub-title">Web development</h6>
                    <ul className="sub-list" id="two-column">
                        <li>HTML</li>
                        <li>CSS & SASS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                    </ul>
                </li>

                <li>
                    <h6 className="sub-title">Linux & bash</h6>
                    <ul className="sub-list">
                        <li>Command line</li>
                        <li>Bash</li>
                        <li>Vimscript</li>
                        <li>Regex</li>
                    </ul>
                </li>

                <li>
                    <h6 className="sub-title">Other</h6>
                    <ul className="sub-list">
                        <li>C++</li>
                        <li>Python</li>
                        <li>Scala</li>
                        <li>SFML library</li>
                        <li>Jupyter Notebook</li>
                        <li>Pandas</li>
                        <li>Scikit-learn</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}


export default Skills
