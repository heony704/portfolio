import './components.scss';

function ProjectName({ id, name, clicked, onClick }) {
    return (
        <div className="projectName">
            <div
                className="clickarea"
                onClick={() => {
                    onClick(id);
                }}
            >
                <div className={clicked ? 'name clicked' : 'name'}>
                    <p>{name}</p>
                </div>
                <div className={clicked ? 'dot clicked' : 'dot'}>
                    <div />
                </div>
            </div>
            <div className={clicked ? 'mark' : 'mark hidden'} />
        </div>
    );
}

export default ProjectName;
