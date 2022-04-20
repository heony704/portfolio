import '../../../styles/projectContents.scss';

function ProjectContents({ project }) {
    const { date, skills, summary } = project;

    return (
        <div className="projectContents">
            <p className="date">{date}</p>
            <div className="tech">
                {skills.map((skill, i) => (
                    <p key={i}>{skill}</p>
                ))}
            </div>
            <pre>{summary}</pre>
        </div>
    );
}

export default ProjectContents;
