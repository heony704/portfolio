import '../../../styles/extrainfo.scss';
import { Url, UrlPdf } from './Url';
import { Awards, AwardsPdf } from './Awards';
import { View } from '@react-pdf/renderer';

function ExtraInfo({ url, awards }) {
    return (
        <div className="extrainfo">
            {url && <Url url={url} />}
            {awards && <Awards awards={awards} />}
        </div>
    );
}

function ExtraInfoPdf({ url, awards }) {
    return (
        <View style={{ marginTop: 8 }}>
            {url && <UrlPdf url={url} />}
            {awards && <AwardsPdf awards={awards} />}
        </View>
    );
}

export { ExtraInfo, ExtraInfoPdf };
