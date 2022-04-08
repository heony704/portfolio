import './components.scss';
import { useState } from 'react';
import ProjectName from './ProjectName';
import ProjectContents from './ProjectContents';

function Projects({ projects }) {
    const [all, setAll] = useState(false);
    const onClickAll = () => {
        setAll(!all);
    };

    const onVisible = (id) => {};

    return (
        <div className="projects">
            <div className="title">
                <h2>PROJECTS</h2>
                <button
                    className={all ? 'clicked' : 'unclick'}
                    onClick={onClickAll}
                >
                    ALL
                </button>
            </div>
            <div className="timeline">
                <div className="top">
                    {projects.map((project) => (
                        <ProjectName
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            all={all}
                            onVisible={onVisible}
                        />
                    ))}
                </div>
                <hr />
            </div>
            <div className="contents">
                {projects.map((project) => (
                    <ProjectContents key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
