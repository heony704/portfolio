import '../../styles/title.scss';

function Title({ title }) {
    return (
        <div className="title">
            <div>
                <p>{title}</p>
                <div className="highlight" />
            </div>
        </div>
    );
}

export default Title;
