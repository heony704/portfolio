import { Font } from '@react-pdf/renderer';
import thin from '../fonts/Pretendard-Thin.ttf';
import light from '../fonts/Pretendard-Light.ttf';
import extralight from '../fonts/Pretendard-ExtraLight.ttf';
import regular from '../fonts/Pretendard-Regular.ttf';
import medium from '../fonts/Pretendard-Medium.ttf';

Font.register({
    family: 'Pretendard',
    fonts: [
        {
            src: thin,
            fontWeight: 100
        },
        {
            src: light,
            fontWeight: 200
        },
        {
            src: extralight,
            fontWeight: 300
        },
        {
            src: regular,
            fontWeight: 400
        },
        {
            src: medium,
            fontWeight: 500
        }
    ]
});

Font.registerEmojiSource({
    format: 'png',
    url: 'https://twemoji.maxcdn.com/2/72x72/'
});
