import '../../../styles/projectContents.scss';
import Carousel from './Carousel';
import ExtraInfo from './ExtraInfo';

function ProjectContents({ project, hasSubname }) {
    const { date, personnel, skills, images, summary, url, awards } = project;

    return (
        <div
            className={
                hasSubname ? 'projectContents hassubname' : 'projectContents'
            }
        >
            <span className="date">{date}</span>
            <span className="personnel">{personnel} 프로젝트</span>
            <div className="tech">
                {skills.map((skill, i) => (
                    <p key={i}>{skill}</p>
                ))}
            </div>
            {/* {images && (
                <div className="carouselwrap">
                    <Carousel images={images} />
                </div>
            )} */}
            <pre>{summary}</pre>
            {(url || awards) && (
                <div className="extrawrap">
                    <ExtraInfo url={url} awards={awards} />
                </div>
            )}
        </div>
    );
}

export default ProjectContents;
