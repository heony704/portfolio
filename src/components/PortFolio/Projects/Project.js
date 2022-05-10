import '../../../styles/project.scss';
import ProjectContents from './ProjectContents';

function ProjectBox({ project, clicked, onClickFnc }) {
    const { id, icon, name, subname } = project;

    return (
        <div className="project">
            <div>
                <div
                    className={clicked ? 'clickarea clicked' : 'clickarea'}
                    onClick={() => {
                        onClickFnc(id);
                    }}
                >
                    <div className={clicked ? 'dot clicked' : 'dot'}>
                        <div></div>
                    </div>
                    <div className={clicked ? 'pointer clicked' : 'pointer'}>
                        <div></div>
                    </div>
                    <div className={clicked ? 'name clicked' : 'name'}>
                        <div>
                            <div className="prime">
                                <div className="icon">{icon}</div>
                                <h1>{name}</h1>
                            </div>
                            {subname && <p>{subname}</p>}
                        </div>
                    </div>
                </div>
            </div>
            {clicked && (
                <div className="contents">
                    <ProjectContents
                        key={project.id}
                        project={project}
                        hasSubname={!!subname}
                    />
                </div>
            )}
        </div>
    );
}

export default ProjectBox;
