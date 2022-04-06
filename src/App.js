import './App.scss';
import { HiOutlineMail } from 'react-icons/hi';

function App() {
    return (
        <div className="body">
            <header>
                <div className="header">
                    <div className="contents">
                        <p>HEONY's POFO</p>
                        <p>button</p>
                    </div>
                </div>
            </header>
            <main>
                <div className="main">
                    <div className="profile">
                        <div className="info">
                            <img
                                src={
                                    process.env.PUBLIC_URL + '/images/self.png'
                                }
                                alt="self"
                            />
                            <div className="name">
                                <h1>이승헌 | Seungheon Lee</h1>
                                <p>Front-End Programmer</p>
                            </div>
                        </div>
                        <div className="contact">
                            <HiOutlineMail />
                        </div>
                    </div>
                    <div className="about">
                        <h2>사용자처럼 생각하는 개발자</h2>
                        <p>
                            안녕하세요! 사용자처럼 생각하는 프론트엔드 개발자,
                            이승헌입니다. JavaScript, TypeScript, React를 배우고
                            있으며 백엔드에도 관심이 있습니다. 작은 차이로
                            사용자 경험이 더 좋아지는 순간을 좋아합니다.
                        </p>
                    </div>
                    <div className="history">
                        <h2>HISTORY</h2>
                        <p>
                            2016/03 ~ 2021/08 전북대학교 소프트웨어공학과 졸업
                        </p>
                    </div>
                    <div className="skills">
                        <h2>SKILLS</h2>
                        <p>JavaScript React TypeScript Node.js</p>
                    </div>
                    <div className="certificate">
                        <h2>CERTIFICATE</h2>
                        <p>정보처리기사</p>
                        <p>SQLD</p>
                    </div>
                    <div className="projects">
                        <div className="title">
                            <h2>PROJECTS</h2>
                            <button>ALL</button>
                        </div>
                        <div className="names">
                            <p>SBOT</p>
                            <p>MAYO</p>
                            <p>POFO</p>
                        </div>
                        <div className="timeline">
                            <div className="dots">
                                <div>
                                    <div></div>
                                </div>
                                <div>
                                    <div></div>
                                </div>
                                <div>
                                    <div></div>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="contents">
                            <div className="marks">
                                <div className="not"></div>
                                <div></div>
                                <div className="not"></div>
                            </div>
                            <div className="summary">
                                <div class="date">2021.05 - 2021.06</div>
                                <h1>
                                    달려 또 달려 너무 먼 길을 혼자서 달려왔나봐
                                </h1>
                                <div class="tech">
                                    <p>Javascript</p>
                                    <p>Typescript</p>
                                    <p>Node.js</p>
                                </div>
                                <h2>프로젝트 개요</h2>
                                <p>
                                    다들 나한테 말해 쉽지 않을 거래 원래 처음이
                                    어려운 거야 Liar 내가 길잃은 날 이 선을
                                    넘어가고 싶어 진짜 내 모습을 찾아서 Freedom
                                    이제 고민하지 않을게 나를 믿을래 자유롭게
                                    날아 저 위로 속박과 굴레에서 어깨 펴 마셔
                                    윗공기 언젠가 한편의 시가 되어 그 위에
                                    꽃피우길 아무리 난 돈을 쓸어 담아도 널 널
                                    생각해 담아두지 다른 여자들 휙 감아도 난 널
                                    생각하지
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <p>developed by seungheon Lee .</p>
            </footer>
        </div>
    );
}

export default App;
