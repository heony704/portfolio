import PropTypes from 'prop-types';
import { Title, TitlePdf } from './Title';
import { TableRow, TableRowPdf } from './TableRow';
import { StyleSheet, View } from '@react-pdf/renderer';

History.propTypes = {
    history: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string,
            contents: PropTypes.string
        })
    )
};

export function History({ history }) {
    return (
        <div>
            <Title title="HISTORY" />
            {history.map((x, i) => (
                <TableRow key={i} date={x.date} task={x.contents} />
            ))}
        </div>
    );
}

HistoryPdf.propTypes = {
    history: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string,
            contents: PropTypes.string
        })
    )
};

export function HistoryPdf({ history }) {
    return (
        <View style={styles.history}>
            <TitlePdf title="HISTORY" width={70} />
            {history.map((x, i) => (
                <TableRowPdf key={i} date={x.date} task={x.contents} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    history: {
        width: '50%'
    }
});
