import './components.scss';

function Projects({ projects }) {
    return (
        <div className="projects">
            <div className="title">
                <h2>PROJECTS</h2>
                <button>ALL</button>
            </div>
            <div className="timeline">
                <div className="top">
                    {projects.map((project) => (
                        <div>
                            <div className="clickarea">
                                <div className="name">
                                    <p>{project.name}</p>
                                </div>
                                <div className="dot">
                                    <div></div>
                                </div>
                            </div>
                            <div className="mark" />
                        </div>
                    ))}
                </div>
                <hr />
            </div>
            <div className="contents">
                {projects.map((project) => (
                    <div>
                        <div className="date">{project.date}</div>
                        <h1>{project.name}</h1>
                        <div className="tech">
                            {project.skills.map((skill) => (
                                <p>{skill}</p>
                            ))}
                        </div>
                        <h2>{project.summary.title}</h2>
                        <p>{project.summary.contents}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
