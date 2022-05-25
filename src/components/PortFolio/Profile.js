import '../../styles/profile.scss';
import PropTypes from 'prop-types';
import { Contact, ContactPdf } from './Contact';
import { StyleSheet, View, Image, Text } from '@react-pdf/renderer';

Profile.propTypes = {
    profile: PropTypes.object
};

export function Profile({ profile }) {
    const { self, name, english, job, email, github, velog, tel } = profile;

    return (
        <div className="profile">
            <div className="selfimg">
                <img src={self} alt="self" />
            </div>
            <div className="info">
                <div className="name">
                    <div>
                        <h1>{name}</h1>
                        {english && (
                            <h1 className="english">{`  |  ` + english}</h1>
                        )}
                    </div>
                    <p>{job}</p>
                </div>
                <Contact
                    email={email}
                    github={github}
                    velog={velog}
                    tel={tel}
                />
            </div>
        </div>
    );
}

ProfilePdf.propTypes = {
    profile: PropTypes.object
};

export function ProfilePdf({ profile }) {
    const { self, name, english, job, email, github, velog, tel } = profile;

    return (
        <View style={styles.profile}>
            <Image src={self} style={styles.selfimg} />
            <View style={styles.info}>
                <View style={styles.name}>
                    <View style={styles.namecontents}>
                        <Text style={styles.h}>{name}</Text>
                        {english && (
                            <Text style={[styles.h, { paddingLeft: 10 }]}>
                                {'|  '.concat(english)}
                            </Text>
                        )}
                    </View>
                    <Text style={styles.p}>{job}</Text>
                </View>
            </View>
            <ContactPdf email={email} github={github} velog={velog} tel={tel} />
        </View>
    );
}

const styles = StyleSheet.create({
    profile: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    selfimg: { width: 70, height: 70 },
    info: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flex: ''
    },
    name: { paddingHorizontal: 25 },
    namecontents: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 6,
        flexDirection: 'row'
    },
    h: { fontSize: 20, fontWeight: 500 },
    p: { fontSize: 13, color: 'dimgray', paddingLeft: 1 }
});
