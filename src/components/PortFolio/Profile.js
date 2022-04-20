import '../../styles/profile.scss';
import { HiOutlineMail } from 'react-icons/hi';

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
                <HiOutlineMail />
            </div>
        </div>
    );
}

export default Profile;
