import '../../styles/projects.scss';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Project, ProjectPdf } from './Projects/Project';
import { Title, TitlePdf } from './Title';
import { StyleSheet, View } from '@react-pdf/renderer';

Projects.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object)
};

export function Projects({ projects }) {
    const [visible, setVisible] = useState(projects.map(() => false));
    const onClickName = (index) => {
        setVisible(visible.map((v, i) => (i === index ? !v : v)));
    };

    const [allBtn, setAllBtn] = useState(false);
    const onClickAll = () => {
        setAllBtn(!allBtn);
    };

    useEffect(() => {
        if (allBtn) {
            setVisible((prev) => prev.map(() => true));
        } else if (visible.indexOf(false) < 0) {
            setVisible((prev) => prev.map(() => false));
        }
    }, [allBtn]);

    useEffect(() => {
        if (visible.indexOf(false) > -1) {
            setAllBtn(false);
        }
        if (!allBtn && visible.indexOf(false) < 0) {
            setAllBtn(true);
        }
    }, [visible]);

    return (
        <div className="projects">
            <div className="wrap-title">
                <Title title="PROJECTS" />
                <button
                    className={allBtn ? 'clicked' : 'unclick'}
                    onClick={onClickAll}
                >
                    ALL
                </button>
            </div>
            <div className="timeline">
                <div className="line"></div>
                <div className="projectList">
                    {projects
                        .slice(0)
                        .reverse()
                        .map((project, index) => (
                            <Project
                                key={index}
                                index={index}
                                project={project}
                                clicked={visible[index]}
                                onClickFnc={onClickName}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

ProjectsPdf.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object)
};

export function ProjectsPdf({ projects }) {
    return (
        <View>
            <TitlePdf title="PROJECTS" width={87} />
            <View style={styles.timeline}>
                <View style={styles.line}></View>
                <View style={styles.projectlist}>
                    {projects
                        .slice(0)
                        .reverse()
                        .map((project, i) => (
                            <ProjectPdf key={i} project={project} />
                        ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    timeline: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    line: {
        width: 1,
        backgroundColor: 'black',
        position: 'relative',
        left: 20
    },
    projectlist: {
        display: 'flex',
        width: '100%',
        paddingRight: 15,
        paddingBottom: 15
    }
});
