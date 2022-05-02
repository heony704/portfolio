import '../../styles/certificate.scss';
import Title from './Title';

function Certificate({ certificate }) {
    return (
        <div className="certificate">
            {/* <h1 className="title">CERTIFICATE</h1> */}
            <Title title="CERTIFICATE" />
            <table>
                <tbody>
                    {certificate.map((x, i) => (
                        <tr key={i}>
                            <td>{x.date}</td>
                            <td>{x.name}</td>
                            <td>{x.issuer}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Certificate;
