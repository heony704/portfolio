import './components.scss';

function Skills({ skills }) {
    return (
        <div className="skills">
            <h2>SKILLS</h2>
            <div>
                {skills.map((x, i) => (
                    <img key={i} src={x.imgSrc} alt={x.name} />
                ))}
            </div>
        </div>
    );
}

export default Skills;
