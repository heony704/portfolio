import './components.scss';
import ProjectContents from './ProjectContents';

function ProjectBox({ project, clicked, onClickFnc }) {
    const { id, name, subname } = project;

    return (
        <div className="projectBox">
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
                    <div className={clicked ? 'name clicked' : 'name'}>
                        <h2>{name}</h2>
                        {subname && <p>{subname}</p>}
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
