import './components.scss';
import { useState } from 'react';

function ProjectContents({ project }) {
    const { id, date, name, skills, summary } = project;

    return (
        <div className="projectContents">
            <div className="date">{date}</div>
            <h1>{name}</h1>
            <div className="tech">
                {skills.map((skill) => (
                    <p>{skill}</p>
                ))}
            </div>
            <h2>{summary.title}</h2>
            <p>{summary.contents}</p>
        </div>
    );
}

export default ProjectContents;
