import './components.scss';
import { useState, useEffect } from 'react';

function ProjectName({ id, name, allBtn }) {
    const [clicked, setClicked] = useState(false);
    const onClick = () => {
        setClicked(!clicked);
    };

    useEffect(() => {
        setClicked(allBtn);
    }, [allBtn]);

    return (
        <div className="projectName">
            <div className="clickarea" onClick={onClick}>
                <div className={clicked ? 'name clicked' : 'name'}>
                    <p>{name}</p>
                </div>
                <div className={clicked ? 'dot clicked' : 'dot'}>
                    <div />
                </div>
            </div>
            <div className={clicked ? 'mark' : 'mark hidden'} />
        </div>
    );
}

export default ProjectName;
