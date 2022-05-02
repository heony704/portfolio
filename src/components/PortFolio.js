import '../styles/portfolio.scss';
import Profile from './PortFolio/Profile';
import About from './PortFolio/About';
import History from './PortFolio/History';
import Skills from './PortFolio/Skills';
import Certificate from './PortFolio/Certificate';
import Projects from './PortFolio/Projects';

function PortFolio({ portfolio }) {
    const { profile, about, history, skills, certificate, projects } =
        portfolio;

    return (
        <main className="portfolio">
            <div>
                <Profile
                    selfSrc={profile.self}
                    name={profile.name}
                    job={profile.job}
                />
                <About title={about.title} contents={about.contents} />
                <Skills skills={skills} />
                <div className="bind">
                    <History history={history} />
                    <Certificate certificate={certificate} />
                </div>
                <Projects projects={projects} />
            </div>
        </main>
    );
}

export default PortFolio;
