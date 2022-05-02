import Title from './Title';
import TableRow from './TableRow';

function History({ history }) {
    return (
        <div>
            <Title title="HISTORY" />
            {history.map((x, i) => (
                <TableRow key={i} date={x.date} task={x.contents} />
            ))}
        </div>
    );
}

export default History;
