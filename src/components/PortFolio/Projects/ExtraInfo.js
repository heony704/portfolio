import '../../../styles/extrainfo.scss';
import Url from './Url';
import Awards from './Awards';

function ExtraInfo({ url, awards }) {
    return (
        <div className="extrainfo">
            {url && <Url url={url} />}
            {awards && <Awards awards={awards} />}
        </div>
    );
}

export default ExtraInfo;
