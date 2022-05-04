import '../../../styles/projectContents.scss';
import Carousel from './Carousel';

function ProjectContents({ project }) {
    const { date, personnel, skills, images, summary } = project;

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
        </div>
    );
}

export default ProjectContents;
