import '../../styles/title.scss';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

function Title({ title }) {
    return (
        <div className="title">
            <div>
                <p>{title}</p>
                <div className="highlight"></div>
            </div>
        </div>
    );
}

function TitlePdf({ title, width }) {
    return (
        <View style={styles.title}>
            <View style={styles.wrap}>
                <View style={[styles.highlight, { width: width }]}></View>
                <Text style={styles.p}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        display: 'flex',
        paddingTop: 10,
        paddingBottom: 5
    },
    highlight: {
        height: 8,
        backgroundColor: '#E3F2F9',
        position: 'relative',
        zIndex: -1,
        left: 3,
        top: 13
    },
    p: {
        fontSize: 16,
        fontWeight: 500
    }
});

export { Title, TitlePdf };
