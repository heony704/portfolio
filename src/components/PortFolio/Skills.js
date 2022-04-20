import '../../styles/skills.scss';

function Skills({ skills }) {
    return (
        <div className="skills">
            <h1 className="title">SKILLS</h1>
            <div>
                {skills.map((x, i) => (
                    <img key={i} src={x.imgSrc} alt={x.name} />
                ))}
            </div>
        </div>
    );
}

export default Skills;
