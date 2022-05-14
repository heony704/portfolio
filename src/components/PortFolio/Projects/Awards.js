import '../../../styles/awards.scss';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

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

function AwardsPdf({ awards }) {
    return (
        <View style={styles.awards}>
            <Text style={styles.title}>AWARDS</Text>
            <View>
                {awards.map((a, i) => (
                    <View style={styles.award} key={i}>
                        <Text style={styles.date}>{a.date}</Text>
                        <Text style={styles.name}>{a.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    awards: {
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        fontSize: 11,
        fontWeight: 400,
        marginRight: 5
    },
    award: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 11,
        fontWeight: 300,
        marginBottom: 3
    },
    date: {
        marginRight: 5,
        color: 'gray'
    }
});

export { Awards, AwardsPdf };
