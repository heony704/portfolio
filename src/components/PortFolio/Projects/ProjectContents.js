import '../../../styles/projectContents.scss';
import Carousel from './Carousel';
import Url from './Url';
import Awards from './Awards';

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
                <div className="carouselwrap">
                    <Carousel images={images} />
                </div>
            )}
            <pre>{summary}</pre>
            {url && (
                <div className="urlwrap">
                    <Url url={url} />
                </div>
            )}
            {awards && (
                <div className="awardswrap">
                    <Awards awards={awards} />
                </div>
            )}
        </div>
    );
}

export default ProjectContents;
