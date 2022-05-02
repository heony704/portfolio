import '../../styles/profile.scss';
import { IoMailOutline } from 'react-icons/io5';

function Profile({ selfSrc, name, job }) {
    return (
        <div className="profile">
            <div className="info">
                <img src={process.env.PUBLIC_URL + selfSrc} alt="self" />

                <div className="name">
                    <h1>{name}</h1>
                    <p>{job}</p>
                </div>
            </div>

            <div className="contactBtn">
                <IoMailOutline />
            </div>
        </div>
    );
}

export default Profile;
