import PropTypes from 'prop-types';
import { Title, TitlePdf } from './Title';
import { TableRow, TableRowPdf } from './TableRow';
import { StyleSheet, View } from '@react-pdf/renderer';

Certificate.propTypes = {
    certificate: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            issuer: PropTypes.string,
            date: PropTypes.string
        })
    )
};

export function Certificate({ certificate }) {
    return (
        <div>
            <Title title="CERTIFICATE" />
            {certificate.map((x, i) => (
                <TableRow
                    key={i}
                    date={x.date}
                    task={x.name}
                    extra={x.issuer}
                />
            ))}
        </div>
    );
}

CertificatePdf.propTypes = {
    certificate: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            issuer: PropTypes.string,
            date: PropTypes.string
        })
    )
};

export function CertificatePdf({ certificate }) {
    return (
        <View style={styles.certificate}>
            <TitlePdf title="CERTIFICATE" width={105} />
            {certificate.map((x, i) => (
                <TableRowPdf
                    key={i}
                    date={x.date}
                    task={x.name}
                    extra={x.issuer}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    certificate: {
        width: '50%'
    }
});
