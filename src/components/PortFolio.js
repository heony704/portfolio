import './components.scss';
import Profile from './Profile';
import About from './About';
import History from './History';
import Skills from './Skills';
import Certificate from './Certificate';
import Projects from './Projects';

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
