import '../../styles/skillitem.scss';

function SkillItem({ skill }) {
    const { background, color, icon, name } = skill;
    const style = {
        background: background,
        color: color
    };

    return (
        <div className="skillitem" style={style}>
            <div className="icon">{icon}</div>
            <p>{name}</p>
        </div>
    );
}

export default SkillItem;
