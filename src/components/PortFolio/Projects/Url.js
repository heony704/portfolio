import '../../../styles/url.scss';
import { FiExternalLink } from 'react-icons/fi';

function Url({ url }) {
    return (
        <>
            {url.map((u, i) => (
                <div className="url">
                    <p className="urlname">{u.name}</p>
                    <a href={u.src} target="_blank" rel="noreferrer">
                        {u.src}
                        <FiExternalLink />
                    </a>
                </div>
            ))}
        </>
    );
}

export default Url;
