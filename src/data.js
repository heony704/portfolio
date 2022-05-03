const data = {
    profile: {
        self: '/images/self.png',
        name: '이승헌  |  Seungheon Lee',
        job: 'Front-End Programmer'
    },
    about: {
        // title: '사용자처럼 생각하는 개발자',
        contents:
            '안녕하세요! 사용자처럼 생각하는 프론트엔드 개발자, 이승헌입니다. \nJavaScript, TypeScript, React를 배우고 있으며 백엔드에도 관심이 있습니다. 작은 차이로 사용자 경험이 더 좋아지는 순간을 좋아합니다.'
    },
    history: [
        {
            date: '2016/03 - 2021/08',
            contents: '전북대학교 소프트웨어공학과'
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
            icon: '⭕',
            name: 'ARM Cortex-M3 틱택토',
            date: '2018/03 - 2018/06',
            personnel: '팀',
            skills: ['C', 'LPC1768', 'Cortec-M3'],
            summary:
                'ARM Cortex-M3의 LCD에 표시된 화면을 보고 Keypad를 조작해서 진행하는 틱택토 게임입니다.\n\nLCD와 Keypad 입출력을 다루기 위해서 데이터시트와 소스코드를 토대로 프로세서의 구조를 분석했습니다. 프로세서가 어떻게 LCD와 Keypad를 조작하는지 알아내는 과정은 어려웠지만 이해한 후에는 프로그래밍이 어렵지 않고 즐거웠습니다. 구조와 동작원리에 대한 이해가 중요하다는 걸 알게 해준 프로젝트입니다.'
        },
        {
            id: 2,
            icon: '👀',
            name: 'Seeing',
            subname: '장애인주차구역 불법주차 자동신고 디바이스',
            date: '2018/01 - 2018/11',
            personnel: '팀',
            skills: ['JavaScript', 'Node.js', 'Raspberry Pi', 'OpenCV'],
            summary:
                '장애인전용주차구역에 불법으로 주‧정차한 자동차를 자동으로 신고하는 설치형 디바이스입니다. 라즈베리파이와 카메라, OpenCV를 이용해 자동차의 번호판을 인식하고 불법주차된 자동차의 번호판을 JavaScript, Node.js를 이용하여 개발한 웹사이트로 전송합니다.\n\n시장분석과 아키텍쳐 설계에 신경써 실제로 사용할 수 있는 프로젝트를 만들기 위해 노력했습니다. 처음으로 JavaScript와 프론트엔드를 겪어본 프로젝트입니다.'
        },
        {
            id: 3,
            icon: '🌱',
            name: 'Sprout',
            subname: '식물에 대한 정보를 전달하는 다기능 웹사이트',
            date: '2020/03 - 2020/06',
            personnel: '팀',
            skills: [
                'Java',
                'Maven',
                'MySQL',
                'Tomcat',
                'Google Cloud Vision API'
            ],
            summary:
                '반려식물을 키우는 사람들이 정보를 쉽게 구할 수 있도록 여러가지 기능을 넣은 웹사이트입니다. 게시판, 사진 속 식물 이름 탐색, 식물 정보 검색, 원예용품 검색 등의 기능이 있으며 그 중 게시판 기능과 머신러닝 API를 통해 사진 속 식물 이름을 찾는 기능을 맡아 개발했습니다.\n\n게시판 글쓰기, 글 조회, 글 수정, 글 삭제 기능을 만들기 위해 MySQL로 DB를 구축하고 Tomcat으로 DB를 연결했습니다. 사용자가 첨부한 사진과 유사한 물체의 이름을 찾기 위해 머신러닝 API로 Google Cloud Vision API를 사용하면서 API를 어떻게 쓰는지 익혔습니다. \n\n또한 프로젝트프로세스로 스크럼을 도입하여 1주의 스프린트 주기를 가지고 프로덕트 백로그를 통해 태스크를 관리하며 개발 변경사항을 빠르게 적용하려 노력했습니다.'
        },
        {
            id: 4,
            icon: '⏰',
            name: 'SBOT',
            subname: '캠스터디를 위해 제작된 디스코드 봇',
            date: '2021.08 - 2021.09',
            personnel: '개인',
            skills: ['TypeScript', 'Node.js', 'Discord.js'],
            summary:
                '디스코드로 캠스터디를 진행하던 중, 스터디원이 스터디 관련 기능이 있으면 좋겠다고 건의해서 만들게 된 디스코드 봇입니다. 스톱워치로 공부시간을 체크할 수 있고 체크한 시간을 바탕으로 하루동안 공부한 시간을 알려줍니다.\n\n오라클 클라우드 인프라(OCI)의 인스턴스에 서버를 켜 실제로 사용하면서 주기적으로 사용자의 피드백을 받아 기능을 개선했습니다. 타입 관련 오류를 줄이기 위해 TypeScript를 사용했습니다.'
        },
        {
            id: 5,
            icon: '🌊',
            name: 'SINK',
            subname: '자신의 생각을 메모할 수 있는 웹사이트',
            date: '2021/10 - 2022/03',
            personnel: '개인',
            skills: ['React', 'JavaScript', 'styled-components'],
            images: [
                {
                    name: 'JavaScript',
                    src: 'https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black'
                },
                {
                    name: 'React',
                    src: 'https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black'
                },
                {
                    name: 'TypeScript',
                    src: 'https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white'
                }
            ],
            summary:
                '메모를 작성, 수정, 삭제, 검색할 수 있는 웹사이트입니다. 아이디어를 간단히 작성하고 검색할 수 있는 웹사이트가 필요해서 직접 만들었습니다.\n\n처음 만든 React 프로젝트로, 해당 프로젝트를 통해 함수형 컴포넌트와 기본적인 Hooks 사용을 익혔습니다. UX를 위해서 컴포넌트 동작을 부드럽게 만들었습니다.'
        }
        // {
        //     id: 6,
        //     name: '📃 포트폴리오 웹사이트',
        //     date: '2022/04 - 2022/04',
        //     skills: ['React', 'JavaScript', 'sass'],
        //     summary: '지금 보고 있는 포트폴리오 웹사이트입니다.\n\n'
        // }
    ]
};

export default data;
