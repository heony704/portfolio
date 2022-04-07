import './components.scss';

function Skills() {
    return (
        <div className="skills">
            <h2>SKILLS</h2>
            <div>
                <img
                    src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"
                    alt="JavaScript"
                />
                <img
                    src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black"
                    alt="React"
                />
                <img
                    src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"
                    alt="TypeScript"
                />
                <img
                    src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"
                    alt="Node.js"
                />
            </div>
        </div>
    );
}

export default Skills;
