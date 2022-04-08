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
            startYear: 2016,
            startMonth: 3,
            endYear: 2021,
            endMonth: 8,
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
            name: 'SBOT',
            date: '2021.08 - 2021.09',
            skills: ['TypeScript', 'Node.js', 'Discord.js'],
            summary: {
                title: '프로젝트 개요',
                contents:
                    '다들 나한테 말해 쉽지 않을 거래 원래 처음이 어려운 거야 Liar 내가 길잃은 날 이 선을 넘어가고 싶어 진짜 내 모습을 찾아서 Freedom 이제 고민하지 않을게 나를 믿을래 자유롭게 날아 저 위로 속박과 굴레에서 어깨 펴 마셔 윗공기 언젠가 한편의 시가 되어 그 위에 꽃피우길 아무리 난 돈을 쓸어 담아도 널 널 생각해 담아두지 다른 여자들 휙 감아도 난 널 생각하지'
            }
        },
        {
            id: 2,
            name: 'MAYO',
            date: '2021/10 - 2022/03',
            skills: ['React', 'JavaScript', 'styled-components'],
            summary: { title: 'test title', contents: 'test contents' }
        },
        {
            id: 3,
            name: 'POFO',
            date: '2022/04 - 2022/04',
            skills: ['React', 'JavaScript', 'sass'],
            summary: { title: 'test title', contents: 'test contents' }
        }
    ]
};

export default data;
