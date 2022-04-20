import '../../../styles/project.scss';
import ProjectContents from './ProjectContents';

function ProjectBox({ project, clicked, onClickFnc }) {
    const { id, name, subname } = project;

    return (
        <div className="project">
            <div>
                <div
                    className="clickarea"
                    onClick={() => {
                        onClickFnc(id);
                    }}
                >
                    <div className={clicked ? 'dot clicked' : 'dot'}>
                        <div />
                    </div>
                    <div className={clicked ? 'pointer clicked' : 'pointer'}>
                        <div />
                    </div>
                    <div className={clicked ? 'name clicked' : 'name'}>
                        <div>
                            <h1>{name}</h1>
                            {subname && <p>{subname}</p>}
                        </div>
                    </div>
                </div>
            </div>
            {clicked && (
                <div className="contents">
                    <ProjectContents key={project.id} project={project} />
                </div>
            )}
        </div>
    );
}

export default ProjectBox;
