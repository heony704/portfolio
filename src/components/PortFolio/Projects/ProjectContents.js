import '../../../styles/projectContents.scss';
import Carousel from './Carousel';

function ProjectContents({ project }) {
    const { date, personnel, skills, images, summary, url, awards } = project;

    return (
        <div className="projectContents">
            <span className="date">{date}</span>
            <span className="personnel">{personnel} 프로젝트</span>
            <div className="tech">
                {skills.map((skill, i) => (
                    <p key={i}>{skill}</p>
                ))}
            </div>
            {images && (
                <div className="imgs">
                    <Carousel images={images} />
                </div>
            )}
            <pre>{summary}</pre>
            {url &&
                url.map((u, i) => (
                    <div className="url" key={i}>
                        <p className="name">{u.name}</p>
                        <p>{u.src}</p>
                    </div>
                ))}
            {awards && <div className="awards"></div>}
        </div>
    );
}

export default ProjectContents;
