import '../../../styles/projectContents.scss';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import { ExtraInfo, ExtraInfoPdf } from './ExtraInfo';
import { StyleSheet, View, Image, Text } from '@react-pdf/renderer';

ProjectContents.propTypes = {
    project: PropTypes.object,
    hasSubname: PropTypes.bool
};

export function ProjectContents({ project, hasSubname }) {
    const { date, personnel, skills, images, summary, url, awards } = project;

    return (
        <div
            className={
                hasSubname ? 'projectContents hassubname' : 'projectContents'
            }
        >
            <span className="date">{date}</span>
            <span className="personnel">{personnel} 프로젝트</span>
            <div className="tech">
                {skills.map((skill, i) => (
                    <p key={i}>{skill}</p>
                ))}
            </div>
            {images && (
                <div className="carouselwrap">
                    <Carousel images={images} />
                </div>
            )}
            <pre>{summary}</pre>
            {(url || awards) && (
                <div className="extrawrap">
                    <ExtraInfo url={url} awards={awards} />
                </div>
            )}
        </div>
    );
}

ProjectContentsPdf.propTypes = {
    project: PropTypes.object,
    hasSubname: PropTypes.bool
};

export function ProjectContentsPdf({ project }) {
    const { date, personnel, skills, mainImg, summary, url, awards } = project;

    return (
        <View>
            <View style={styles.date}>
                <Text>{date}</Text>
                <Text style={styles.personnel}>{personnel} 프로젝트</Text>
            </View>
            <View style={styles.tech}>
                {skills.map((skill, i) => (
                    <Text style={styles.skill} key={i}>
                        {skill}
                    </Text>
                ))}
            </View>
            {mainImg && <Image src={mainImg} style={styles.image} />}
            <Text style={styles.summary}>{summary}</Text>
            {(url || awards) && <ExtraInfoPdf url={url} awards={awards} />}
        </View>
    );
}

const styles = StyleSheet.create({
    date: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 10,
        color: 'dimgray',
        fontWeight: 400,
        paddingTop: 5
    },
    personnel: {
        marginLeft: 8
    },
    tech: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 5
    },
    skill: {
        backgroundColor: 'lightgray',
        fontSize: 10,
        paddingHorizontal: 4,
        paddingVertical: 2,
        color: 'firebrick',
        borderRadius: 3,
        marginRight: 5,
        marginBottom: 3,
        fontWeight: 500
    },
    image: {
        maxHeight: 120,
        objectFit: 'contain',
        paddingTop: 10,
        marginVertical: 5
    },
    summary: {
        fontSize: 12,
        fontWeight: 300,
        paddingTop: 13,
        lineHeight: 1.5
    }
});
