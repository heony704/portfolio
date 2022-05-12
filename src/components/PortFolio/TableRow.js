import '../../styles/tablerow.scss';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

function TableRow({ date, task, extra }) {
    return (
        <div className="tablerow">
            <div className="date">
                <span>{date}</span>
            </div>
            <div className="contents">
                <span>{task}</span>
                {extra && <span> / {extra}</span>}
            </div>
        </div>
    );
}

function TableRowPdf({ date, task, extra }) {
    return (
        <View style={styles.tablerow}>
            <View style={styles.wrap}>
                <Text style={styles.date}>{date}</Text>
            </View>
            <View style={styles.contents}>
                <Text>{task}</Text>
                {extra && <Text style={{ paddingLeft: 3 }}>/ {extra}</Text>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tablerow: {
        fontWeight: 300,
        paddingBottom: 5,
        paddingLeft: 2,
        paddingRight: 5
    },
    wrap: {
        display: 'flex',
        flexDirection: 'row'
    },
    date: {
        backgroundColor: '#ececec',
        fontSize: 10,
        paddingHorizontal: 5,
        paddingVertical: 2,
        color: 'gray',
        borderRadius: 3,
        marginBottom: 2,
        fontWeight: 400
    },
    contents: {
        fontSize: 12,
        paddingLeft: 5,
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 2
    }
});

export { TableRow, TableRowPdf };
