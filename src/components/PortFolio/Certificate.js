import { Title, TitlePdf } from './Title';
import { TableRow, TableRowPdf } from './TableRow';
import { StyleSheet, View } from '@react-pdf/renderer';

function Certificate({ certificate }) {
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

function CertificatePdf({ certificate }) {
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

export { Certificate, CertificatePdf };
