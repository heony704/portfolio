import Title from './Title';
import TableRow from './TableRow';

function Certificate({ certificate }) {
    return (
        <div className="certificate">
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

export default Certificate;
