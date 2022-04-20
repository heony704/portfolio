import '../../styles/about.scss';

function About({ title, contents }) {
    return (
        <div className="about">
            <h1 className="title">{title}</h1>
            <p>{contents}</p>
        </div>
    );
}

export default About;
