import './components.scss';

function History({ history }) {
    return (
        <div className="history">
            <h2>HISTORY</h2>
            <table>
                {history.map((x) => (
                    <tr>
                        <td>
                            {x.startYear}/
                            {String(x.startMonth).padStart(2, '0')} ~{' '}
                            {x.endYear}/{String(x.endMonth).padStart(2, '0')}
                        </td>
                        <td>{x.contents}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default History;
