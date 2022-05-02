import '../../styles/tablerow.scss';

function TableRow({ date, task, extra }) {
    return (
        <div className="tablerow">
            <div className="date">
                <span>{date}</span>
            </div>
            <div className="contents">
                <span className="task">{task}</span>
                {extra && <span className="extra"> / {extra}</span>}
            </div>
        </div>
    );
}

export default TableRow;
