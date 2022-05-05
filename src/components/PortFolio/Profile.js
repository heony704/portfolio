import '../../styles/profile.scss';
import Contact from './Contact';

function Profile({ profile }) {
    const { self, name, job, email, github, velog, tel } = profile;

    return (
        <div className="profile">
            <div className="info">
                <img src={process.env.PUBLIC_URL + self} alt="self" />

                <div className="name">
                    <h1>{name}</h1>
                    <p>{job}</p>
                </div>
            </div>

            <Contact email={email} github={github} velog={velog} tel={tel} />
        </div>
    );
}

export default Profile;
