import '../../styles/about.scss';

function About({ title, contents }) {
    return (
        <div className="about">
            {title && <h1 className="title">{title}</h1>}
            <pre>{contents}</pre>
        </div>
    );
}

export default About;
