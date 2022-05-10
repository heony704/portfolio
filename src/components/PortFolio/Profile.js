import '../../styles/profile.scss';
import Contact from './Contact';

function Profile({ profile }) {
    const { self, name, english, job, email, github, velog, tel } = profile;

    return (
        <div className="profile">
            <div className="selfimg">
                <img src={process.env.PUBLIC_URL + self} alt="self" />
            </div>
            <div className="info">
                <div className="name">
                    <div>
                        <h1>{name}</h1>
                        <h1 className="english">{`  |  ` + english}</h1>
                    </div>
                    <p>{job}</p>
                </div>
                <Contact
                    email={email}
                    github={github}
                    velog={velog}
                    tel={tel}
                />
            </div>
        </div>
    );
}

export default Profile;
