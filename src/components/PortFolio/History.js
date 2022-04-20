import '../../styles/history.scss';

function History({ history }) {
    return (
        <div className="history">
            <h1 className="title">HISTORY</h1>
            <table>
                <tbody>
                    {history.map((x, i) => (
                        <tr key={i}>
                            <td>{x.date}</td>
                            <td>{x.contents}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default History;
