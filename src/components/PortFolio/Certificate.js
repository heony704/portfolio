import '../../styles/certificate.scss';

function Certificate({ certificate }) {
    return (
        <div className="certificate">
            <h1 className="title">CERTIFICATE</h1>
            <table>
                <tbody>
                    {certificate.map((x, i) => (
                        <tr key={i}>
                            <td>{x.name}</td>
                            <td>{x.issuer}</td>
                            <td>{x.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Certificate;
