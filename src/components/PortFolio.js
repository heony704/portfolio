import './components.scss';
import Profile from './Profile';
import About from './About';
import History from './History';
import Skills from './Skills';
import Certificate from './Certificate';
import Projects from './Projects';

function PortFolio() {
    return (
        <main>
            <div className="main">
                <Profile />
                <About />
                <History />
                <Skills />
                <Certificate />
                <Projects />
            </div>
        </main>
    );
}

export default PortFolio;
