import { Font } from '@react-pdf/renderer';

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

Font.registerEmojiSource({
    format: 'png',
    url: 'https://twemoji.maxcdn.com/2/72x72/'
});
