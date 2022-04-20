import './components.scss';

function ProjectContents({ project }) {
    const { date, skills, summary } = project;

    return (
        <div className="projectContents">
            <div className="date">{date}</div>
            <div className="tech">
                {skills.map((skill, i) => (
                    <p key={i}>{skill}</p>
                ))}
            </div>
            <h2>{summary.title}</h2>
            <p>{summary.contents}</p>
        </div>
    );
}

export default ProjectContents;
