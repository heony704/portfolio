const data = {
    profile: {
        self: '/images/self.png',
        name: '이승헌 | Seungheon Lee',
        job: 'Front-End Programmer'
    },
    about: {
        title: '사용자처럼 생각하는 개발자',
        contents:
            '안녕하세요! 사용자처럼 생각하는 프론트엔드 개발자, 이승헌입니다. JavaScript, TypeScript, React를 배우고 있으며 백엔드에도 관심이 있습니다. 작은 차이로 사용자 경험이 더 좋아지는 순간을 좋아합니다.'
    },
    history: [
        {
            date: '2021/08',
            contents: '전북대학교 소프트웨어공학과 졸업'
        }
    ],
    skills: [
        {
            name: 'JavaScript',
            imgSrc: 'https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black'
        },
        {
            name: 'React',
            imgSrc: 'https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black'
        },
        {
            name: 'TypeScript',
            imgSrc: 'https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white'
        },
        {
            name: 'Node.js',
            imgSrc: 'https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=Node.js&logoColor=white'
        }
    ],
    certificate: [
        {
            name: '정보처리기사',
            issuer: '한국산업인력공단',
            date: '2021/06'
        },
        {
            name: 'SQL 개발자(SQLD)',
            issuer: '한국데이터산업진흥원',
            date: '2021/04'
        }
    ],
    projects: [
        {
            id: 1,
            name: 'ARM Cortex-M3 틱택토',
            date: '2018/03 - 2018/06',
            skills: ['C', 'LPC1768', 'Cortec-M3'],
            summary: 'ARM Cortex-M3 구조 및 동작 방식 이해하기'
        },
        {
            id: 2,
            name: 'Seeing',
            subname: '장애인주차구역 불법주차 자동신고 디바이스',
            date: '2018/01 - 2018/11',
            skills: ['JavaScript', 'Node.js', 'Raspberry Pi', 'OpenCV'],
            summary: ''
        },
        {
            id: 3,
            name: '기계학습을 이용한 KOSPI 지수 변동성 예측',
            date: '2020/03 - 2020/06',
            skills: [
                'Python',
                'R',
                'Scikit-learn',
                'SVM',
                'Decision Tree',
                'Random Forest'
            ],
            summary: ''
        },
        {
            id: 4,
            name: 'Sprout',
            subname: '식물에 대한 정보를 전달하는 다기능 웹사이트',
            date: '2020/03 - 2020/06',
            skills: [
                'Java',
                'Maven',
                'MySQL',
                'Tomcat',
                'Google Cloud Vision API'
            ],
            summary: ''
        },
        {
            id: 5,
            name: 'SBOT',
            subname: '캠스터디를 위해 제작된 디스코드 봇',
            date: '2021.08 - 2021.09',
            skills: ['TypeScript', 'Node.js', 'Discord.js'],
            summary:
                '다들 나한테 말해 쉽지 않을 거래 원래 처음이 어려운 거야 Liar 내가 길잃은 날 이 선을 넘어가고 싶어 진짜 내 모습을 찾아서 Freedom 이제 고민하지 않을게 나를 믿을래 자유롭게 날아 저 위로 속박과 굴레에서 어깨 펴 마셔 윗공기 언젠가 한편의 시가 되어 그 위에 꽃피우길 아무리 난 돈을 쓸어 담아도 널 널 생각해 담아두지 다른 여자들 휙 감아도 난 널 생각하지'
        },
        {
            id: 6,
            name: 'SINK',
            subname: '자신의 생각을 메모할 수 있는 웹사이트',
            date: '2021/10 - 2022/03',
            skills: ['React', 'JavaScript', 'styled-components'],
            summary: 'test contents'
        },
        {
            id: 7,
            name: '포트폴리오 웹사이트',
            date: '2022/04 - 2022/04',
            skills: ['React', 'JavaScript', 'sass'],
            summary: 'test contents'
        }
    ]
};

export default data;
