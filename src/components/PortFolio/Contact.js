import '../../styles/contact.scss';
import { MdMail } from 'react-icons/md';
import { FaGithub, FaVimeo } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';

function Contact({ email, github, velog, tel }) {
    return (
        <div className="contact">
            {tel && (
                <a className="tel" href={`tel: ${tel}`}>
                    <AiFillPhone />
                    <p>{tel}</p>
                </a>
            )}
            {email && (
                <a className="email" href={`mailto: ${email}`}>
                    <MdMail />
                    <p>{email}</p>
                </a>
            )}
            {github && (
                <a
                    className="github"
                    href={`https://${github}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                    <p>{github}</p>
                </a>
            )}
            {velog && (
                <a
                    className="velog"
                    href={`https://${velog}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaVimeo />
                    <p>{velog}</p>
                </a>
            )}
        </div>
    );
}

export default Contact;
