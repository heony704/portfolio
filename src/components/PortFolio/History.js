import '../../styles/history.scss';
import Title from './Title';

function History({ history }) {
    return (
        <div className="history">
            <Title title="HISTORY" />
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
