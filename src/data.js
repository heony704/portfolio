const data = {
    profile: {
        self: 'https://raw.githubusercontent.com/SeungHe0n/data/main/portfolio/self.png',
        name: '이승헌',
        english: 'Seungheon Lee',
        job: 'Front-End Programmer',
        email: 'heony704@gmail.com',
        github: 'github.com/heony704',
        velog: 'velog.io/@heony'
    },
    about: {
        contents:
            '안녕하세요! 사용자처럼 생각하는 프론트엔드 개발자, 이승헌입니다. \nJavaScript, TypeScript, React를 배우고 있으며 백엔드에도 관심이 있습니다. 작은 차이로 사용자 경험이 더 좋아지는 순간을 좋아합니다.'
    },
    skills: [
        {
            name: 'JavaScript',
            svgSrc: 'https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black'
        },
        {
            name: 'React',
            svgSrc: 'https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=black'
        },
        {
            name: 'TypeScript',
            svgSrc: 'https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white'
        },
        {
            name: 'Node',
            svgSrc: 'https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=Node.js&logoColor=white'
        }
    ],
    history: [
        {
            date: '2016/03 - 2021/08',
            contents: '전북대학교 소프트웨어공학과'
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
        // {
        //     icon: '⭕',
        //     name: 'ARM Cortex-M3 틱택토',
        //     date: '2018/03 - 2018/06',
        //     personnel: '팀',
        //     skills: ['C', 'LPC1768', 'Cortec-M3'],
        //     mainImg:
        //         'https://raw.githubusercontent.com/SeungHe0n/data/main/portfolio/tictactoe_play.png',
        //     images: [
        //         {
        //             src: 'https://raw.githubusercontent.com/SeungHe0n/data/main/portfolio/tictactoe_play.gif'
        //         },
        //         {
        //             src: 'https://raw.githubusercontent.com/SeungHe0n/data/main/portfolio/tictactoe_algorithm.png'
        //         }
        //     ],
        //     summary:
        //         'ARM Cortex-M3의 LCD에 표시된 화면을 보고 Keypad를 조작해서 진행하는 틱택토 게임입니다.\n\nLCD와 Keypad 입출력을 다루기 위해서 데이터시트와 소스코드를 토대로 프로세서의 구조를 분석했습니다. 프로세서가 어떻게 LCD와 Keypad를 조작하는지 알아내는 과정은 어려웠지만 이해한 후에는 프로그래밍이 어렵지 않고 즐거웠습니다. 구조와 동작원리에 대한 이해가 중요하다는 걸 알게 해준 프로젝트입니다.'
        // },
        // {
        //     icon: '👀',
        //     name: 'Seeing',
        //     subname: '장애인주차구역 불법주차 자동신고 디바이스',
        //     date: '2018/01 - 2018/11',
        //     personnel: '5인',
        //     skills: ['JavaScript', 'Node.js', 'Raspberry Pi', 'OpenCV'],
        //     mainImg:
        //         'https://raw.githubusercontent.com/SeungHe0n/data/main/portfolio/seeing_back.png',
        //     images: [
        //         {
        //             src: 'https://raw.githubusercontent.com/SeungHe0n/data/main/portfolio/seeing_back.png'
        //         },
        //         {
        //             src: 'https://raw.githubusercontent.com/SeungHe0n/data/main/portfolio/seeing_front.png'
        //         },
        //         {
        //             src: 'https://raw.githubusercontent.com/SeungHe0n/data/main/portfolio/seeing_architecture.png'
        //         }
        //     ],
        //     summary:
        //         '장애인전용주차구역에 불법으로 주‧정차한 자동차를 자동으로 신고하는 설치형 디바이스입니다. 라즈베리파이와 카메라, OpenCV를 이용해 자동차의 번호판을 인식하고 불법주차된 자동차의 번호판을 JavaScript, Node.js를 이용하여 개발한 웹사이트로 전송합니다.\n\n시장분석과 아키텍쳐 설계에 신경써 실제로 사용할 수 있는 프로젝트를 만들기 위해 노력했습니다. 처음으로 JavaScript와 프론트엔드를 겪어본 프로젝트입니다.',
        //     url: [
        //         {
        //             name: 'YOUTUBE',
        //             src: 'https://youtu.be/7wQER_xu_Vc'
        //         }
        //     ],
        //     awards: [
        //         {
        //             date: '2018/11',
        //             name: '스마트 디바이스 아이디어 발굴 캠프 아이디어 경진대회 - 입선'
        //         },
        //         { date: '2018/11', name: '한이음 공모전 - 입선' },
        //         {
        //             date: '2019/02',
        //             name: '도로교통공단 대국민 교통안전 아이디어 공모전 - 은상'
        //         }
        //     ]
        // },
        {
            icon: '🌱',
            name: 'Sprout',
            subname: '식물 관련 정보를 전달하는 다기능 웹사이트',
            date: '2020/03 - 2020/06',
            personnel: '3인',
            skills: [
                'Java',
                'Maven',
                'MySQL',
                'Tomcat',
                'Google Cloud Vision API'
            ],
            mainImg:
                'https://raw.githubusercontent.com/SeungHe0n/data/main/portfolio/sprout_main.png',
            images: [
                {
                    src: 'https://raw.githubusercontent.com/SeungHe0n/data/main/portfolio/sprout_main.png'
                },
                {
                    src: 'https://raw.githubusercontent.com/SeungHe0n/data/main/portfolio/sprout_play1.png'
                },
                {
                    src: 'https://raw.githubusercontent.com/SeungHe0n/data/main/portfolio/sprout_play2.png'
                }
            ],
            summary:
                '반려식물을 키우는 사람들이 정보를 쉽게 구할 수 있도록 여러가지 기능을 넣은 웹사이트입니다. 게시판, 사진 속 식물 이름 탐색, 식물 정보 검색, 원예용품 검색 등의 기능이 있으며 그 중 게시판 기능과 머신러닝 API를 통해 사진 속 식물 이름을 찾는 기능을 맡아 개발했습니다.\n\n- MySQL로 DB 구축 & Tomcat으로 DB 연결\n- Google Cloud Vision API를 이용해 머신러닝 기능 개발\n- 스크럼을 도입하여 태스크 관리 및 개발 변경사항 빠르게 적용',
            awards: [
                {
                    date: '2020/10',
                    name: '한국정보기술학회 대학생 논문경진대회 - 동상'
                }
            ]
        },
        {
            icon: '⏰',
            name: 'SBOT',
            subname: '캠스터디를 위해 제작된 디스코드 봇',
            date: '2021.08 - 2021.09',
            personnel: '개인',
            skills: ['TypeScript', 'Node.js', 'Discord.js'],
            mainImg:
                'https://raw.githubusercontent.com/SeungHe0n/data/main/portfolio/sbot_play.png',
            images: [
                {
                    src: 'https://raw.githubusercontent.com/SeungHe0n/data/main/portfolio/sbot_play1.gif'
                },
                {
                    src: 'https://raw.githubusercontent.com/SeungHe0n/data/main/portfolio/sbot_play2.gif'
                }
            ],
            summary:
                '디스코드로 캠스터디를 진행하던 중, 스터디원이 스터디 관련 기능이 있으면 좋겠다고 건의해서 만들게 된 디스코드 봇입니다. 스톱워치로 공부시간을 체크할 수 있고 체크한 시간을 바탕으로 하루동안 공부한 시간을 알려줍니다.\n\n- 오라클 클라우드 인프라(OCI)에 인스턴스를 만들어 사용하며 서버 장애 조치 및 사용자 피드백에 따라 기능 수정\n- TypeScript를 사용해 타입 관련 오류를 줄임',
            url: [{ name: 'GITHUB', src: 'https://github.com/heony704/SBOT' }]
        },
        {
            icon: '🌊',
            name: 'SINK',
            subname: '자신의 생각을 메모할 수 있는 웹사이트',
            date: '2021/10 - 2022/03',
            personnel: '개인',
            skills: ['React', 'JavaScript', 'styled-components'],
            summary:
                '메모를 작성, 수정, 삭제, 검색할 수 있는 웹사이트입니다. 아이디어를 간단히 작성하고 검색할 수 있는 웹사이트가 필요해서 직접 만들었습니다.\n\n- UX를 위해서 컴포넌트 동작을 부드럽게 만듦',
            url: [
                { name: 'GITHUB', src: 'https://github.com/heony704/sink' },
                { name: 'URL', src: 'https://heony704.github.io/sink/' }
            ]
        },
        {
            icon: '📃',
            name: '포트폴리오 웹사이트',
            date: '2022/04 - 2022/07',
            personnel: '개인',
            skills: ['React', 'JavaScript', 'sass'],
            summary:
                '지금 보고 있는 포트폴리오 웹사이트입니다. 포트폴리오를 나타낼수 있고 해당 포트폴리오를 PDF로 변환해 다운로드할 수 있습니다.\n\n- react-pdf 라이브러리를 사용하여 포트폴리오를 동적으로 PDF 변환\n- media-query를 사용하여 반응형 디자인 적용',
            url: [
                {
                    name: 'github',
                    src: 'https://github.com/heony704/portfolio'
                }
            ]
        }
    ]
};

export default data;
