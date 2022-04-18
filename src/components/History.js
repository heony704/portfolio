import './components.scss';

function History({ history }) {
    return (
        <div className="history">
            <h2>HISTORY</h2>
            <table>
                <tbody>
                    {history.map((x, i) => (
                        <tr key={i}>
                            <td>
                                {x.startYear}/
                                {String(x.startMonth).padStart(2, '0')} ~{' '}
                                {x.endYear}/
                                {String(x.endMonth).padStart(2, '0')}
                            </td>
                            <td>{x.contents}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default History;
