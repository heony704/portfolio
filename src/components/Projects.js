import './components.scss';
import { useEffect, useState } from 'react';
import ProjectBox from './ProjectBox';

function Projects({ projects }) {
    const idList = [];
    for (const project of projects) {
        idList.push({ id: project.id, visibility: false });
    }

    const [visibility, setVisibility] = useState(idList);
    const onClickName = (id) => {
        setVisibility(
            visibility.map((project) =>
                project.id === id
                    ? { ...project, visibility: !project.visibility }
                    : project
            )
        );
    };

    const [allBtn, setAllBtn] = useState(false);
    const onClickAll = () => {
        setAllBtn(!allBtn);
    };

    useEffect(() => {
        if (allBtn) {
            setVisibility(
                visibility.map((project) => {
                    return { ...project, visibility: true };
                })
            );
        } else if (!visibility.find((v) => !v.visibility)) {
            setVisibility(
                visibility.map((project) => {
                    return { ...project, visibility: false };
                })
            );
        }
    }, [allBtn]);

    useEffect(() => {
        if (visibility.find((v) => !v.visibility)) {
            setAllBtn(false);
        }
        if (!allBtn && !visibility.find((v) => !v.visibility)) {
            setAllBtn(true);
        }
    }, [visibility]);

    return (
        <div className="projects">
            <div className="title">
                <h2>PROJECTS</h2>
                <button
                    className={allBtn ? 'clicked' : 'unclick'}
                    onClick={onClickAll}
                >
                    ALL
                </button>
            </div>
            <div className="timeline">
                <div className="line" />
                <div className="projectList">
                    {projects
                        .slice(0)
                        .reverse()
                        .map((project) => (
                            <ProjectBox
                                key={project.id}
                                project={project}
                                clicked={
                                    visibility.find((v) => v.id === project.id)
                                        .visibility
                                }
                                onClick={onClickName}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
