import './components.scss';
import { HiOutlineMail } from 'react-icons/hi';

function Profile() {
    return (
        <div className="profile">
            <div className="info">
                <img
                    src={process.env.PUBLIC_URL + '/images/self.png'}
                    alt="self"
                />
                <div className="name">
                    <h1>이승헌 | Seungheon Lee</h1>
                    <p>Front-End Programmer</p>
                </div>
            </div>
            <div className="contact">
                <HiOutlineMail />
            </div>
        </div>
    );
}

export default Profile;
