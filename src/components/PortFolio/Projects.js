import '../../styles/projects.scss';
import { useEffect, useState } from 'react';
import { Project, ProjectPdf } from './Projects/Project';
import { Title, TitlePdf } from './Title';
import { StyleSheet, View } from '@react-pdf/renderer';

function Projects({ projects }) {
    const idList = [];
    for (const project of projects) {
        idList.push({ id: project.id, visibility: false });
    }

    const [visibility, setVisibility] = useState(idList);
    const onClickName = (id) => {
        setVisibility(
            visibility.map((project) =>
                project.id === id
                    ? { ...project, visibility: !project.visibility }
                    : project
            )
        );
    };

    const [allBtn, setAllBtn] = useState(false);
    const onClickAll = () => {
        setAllBtn(!allBtn);
    };

    useEffect(() => {
        if (allBtn) {
            setVisibility(
                visibility.map((project) => {
                    return { ...project, visibility: true };
                })
            );
        } else if (!visibility.find((v) => !v.visibility)) {
            setVisibility(
                visibility.map((project) => {
                    return { ...project, visibility: false };
                })
            );
        }
    }, [allBtn]);

    useEffect(() => {
        if (visibility.find((v) => !v.visibility)) {
            setAllBtn(false);
        }
        if (!allBtn && !visibility.find((v) => !v.visibility)) {
            setAllBtn(true);
        }
    }, [visibility]);

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
                        .map((project) => (
                            <Project
                                key={project.id}
                                project={project}
                                clicked={
                                    visibility.find((v) => v.id === project.id)
                                        .visibility
                                }
                                onClickFnc={onClickName}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

function ProjectsPdf({ projects }) {
    return (
        <View>
            <TitlePdf title="PROJECTS" width={87} />
            <View style={styles.timeline}>
                <View style={styles.line}></View>
                <View style={styles.projectlist}>
                    {projects
                        .slice(0)
                        .reverse()
                        .map((project) => (
                            <ProjectPdf key={project.id} project={project} />
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

export { Projects, ProjectsPdf };
