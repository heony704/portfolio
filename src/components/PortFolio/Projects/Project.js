import '../../../styles/project.scss';
import { ProjectContents, ProjectContentsPdf } from './ProjectContents';
import { StyleSheet, View, Svg, Path, Text } from '@react-pdf/renderer';

function Project({ project, clicked, onClickFnc }) {
    const { id, icon, name, subname } = project;

    return (
        <div className="project">
            <div>
                <div
                    className={clicked ? 'clickarea clicked' : 'clickarea'}
                    onClick={() => {
                        onClickFnc(id);
                    }}
                >
                    <div className={clicked ? 'dot clicked' : 'dot'}>
                        <div></div>
                    </div>
                    <div className={clicked ? 'pointer clicked' : 'pointer'}>
                        <div></div>
                    </div>
                    <div className={clicked ? 'name clicked' : 'name'}>
                        <div>
                            <div className="prime">
                                <div className="icon">{icon}</div>
                                <h1>{name}</h1>
                            </div>
                            {subname && <p>{subname}</p>}
                        </div>
                    </div>
                </div>
            </div>
            {clicked && (
                <div className="contents">
                    <ProjectContents project={project} hasSubname={!!subname} />
                </div>
            )}
        </div>
    );
}

function ProjectPdf({ project }) {
    const { icon, name, subname } = project;

    return (
        <View style={styles.project}>
            <View style={styles.dot}></View>
            <View style={styles.pointer}>
                <Svg width="13" height="20">
                    <Path fill="#ececec" d="M15 19V5l-8 7z" />
                </Svg>
            </View>
            <View style={styles.content}>
                <View style={styles.namewrap}>
                    <Text>{icon}</Text>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.sub}>{subname}</Text>
                </View>
                <ProjectContentsPdf project={project} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    project: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'flex-end',
        width: '100%'
    },
    dot: {
        width: 5,
        height: 5,
        backgroundColor: 'black',
        borderRadius: '100%',
        marginLeft: 17,
        marginTop: 27
    },
    pointer: {
        marginTop: 17,
        marginLeft: 5
    },
    content: {
        display: 'flex',
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#ececec',
        borderRadius: 8,
        width: 450
    },
    namewrap: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 12,
        alignItems: 'center'
    },
    name: {
        fontSize: 14,
        fontWeight: 500,
        marginLeft: 5
    },
    sub: {
        marginLeft: 8,
        fontWeight: 300,
        color: 'dimgray'
    }
});

export { Project, ProjectPdf };
