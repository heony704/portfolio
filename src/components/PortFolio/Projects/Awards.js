import '../../../styles/awards.scss';

function Awards({ awards }) {
    return (
        <div className="awards">
            <div className="awardstitle">
                <p>AWARDS</p>
            </div>
            <div className="awardsname">
                {awards.map((a, i) => (
                    <div className="award" key={i}>
                        <p className="date">{a.date}</p>
                        <p className="name">{a.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Awards;
