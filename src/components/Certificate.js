import './components.scss';

function Certificate({ certificate }) {
    return (
        <div className="certificate">
            <h2>CERTIFICATE</h2>
            <table>
                {certificate.map((x, i) => (
                    <tr key={i}>
                        <td>{x.name}</td>
                        <td>{x.issuer}</td>
                        <td>{x.date}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default Certificate;
