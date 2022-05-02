import '../../styles/skills.scss';
import Title from './Title';

function Skills({ skills }) {
    return (
        <div className="skills">
            <Title title="SKILLS" />
            <div>
                {skills.map((x, i) => (
                    <img key={i} src={x.imgSrc} alt={x.name} />
                ))}
            </div>
        </div>
    );
}

export default Skills;
