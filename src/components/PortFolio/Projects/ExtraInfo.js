import '../../../styles/extrainfo.scss';
import PropTypes from 'prop-types';
import { Url, UrlPdf } from './Url';
import { Awards, AwardsPdf } from './Awards';
import { View } from '@react-pdf/renderer';

ExtraInfo.propTypes = {
    url: PropTypes.array,
    awards: PropTypes.array
};

export function ExtraInfo({ url, awards }) {
    return (
        <div className="extrainfo">
            {url && <Url url={url} />}
            {awards && <Awards awards={awards} />}
        </div>
    );
}

ExtraInfoPdf.propTypes = {
    url: PropTypes.array,
    awards: PropTypes.array
};

export function ExtraInfoPdf({ url, awards }) {
    return (
        <View style={{ marginTop: 8 }}>
            {url && <UrlPdf url={url} />}
            {awards && <AwardsPdf awards={awards} />}
        </View>
    );
}
