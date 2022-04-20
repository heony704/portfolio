import './components.scss';
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
        <main>
            <div className="main">
                <Profile
                    selfSrc={profile.self}
                    name={profile.name}
                    job={profile.job}
                />
                <About title={about.title} contents={about.contents} />
                <History history={history} />
                <Skills skills={skills} />
                <Certificate certificate={certificate} />
                <Projects projects={projects} />
            </div>
        </main>
    );
}

export default PortFolio;
