import '../../styles/about.scss';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

function About({ about }) {
    const { title, contents } = about;

    return (
        <div className="about">
            {title && <h1 className="title">{title}</h1>}
            <pre>{contents}</pre>
        </div>
    );
}

function AboutPdf({ about }) {
    const { title, contents } = about;

    return (
        <View style={styles.about}>
            {title && <Text style={styles.title}>{title}</Text>}
            <Text style={styles.pre}>{contents}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    about: { paddingTop: 15 },
    title: {
        fontSize: 15,
        fontWeight: 500
    },
    pre: {
        fontSize: 12,
        fontWeight: 300,
        paddingTop: 5,
        lineHeight: 1.5
    }
});

export { About, AboutPdf };
