import React from 'react';
import {
    StyleSheet,
    Font,
    Document,
    Page,
    View,
    Image,
    Text
} from '@react-pdf/renderer';

const PortfolioPdf = ({ portfolio }) => (
    <Document>
        <Page size={'A4'} style={styles.page}></Page>
    </Document>
);

export default PortfolioPdf;

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: 40,
        paddingVertical: 60
    },
    title: { fontFamily: 'Pretendard' }
});

Font.register({
    family: 'Pretendard',
    fonts: [
        {
            src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/public/static/alternative/Pretendard-Thin.ttf',
            fontWeight: 100
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/public/static/alternative/Pretendard-Light.ttf',
            fontWeight: 200
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/public/static/alternative/Pretendard-ExtraLight.ttf',
            fontWeight: 300
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/public/static/alternative/Pretendard-Regular.ttf',
            fontWeight: 400
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/public/static/alternative/Pretendard-Medium.ttf',
            fontWeight: 500
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/public/static/alternative/Pretendard-SemiBold.ttf',
            fontWeight: 600
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/public/static/alternative/Pretendard-Bold.ttf',
            fontWeight: 700
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/public/static/alternative/Pretendard-ExtraBold.ttf',
            fontWeight: 800
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/public/static/alternative/Pretendard-Black.ttf',
            fontWeight: 900
        }
    ]
});
