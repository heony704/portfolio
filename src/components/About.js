import './components.scss';

function About({ title, contents }) {
    return (
        <div className="about">
            <h2>{title}</h2>
            <p>{contents}</p>
        </div>
    );
}

export default About;
