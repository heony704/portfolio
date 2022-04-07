import './components.scss';

function Projects({ projects }) {
    return (
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
                    <h1>달려 또 달려 너무 먼 길을 혼자서 달려왔나봐</h1>
                    <div class="tech">
                        <p>Javascript</p>
                        <p>Typescript</p>
                        <p>Node.js</p>
                    </div>
                    <h2>프로젝트 개요</h2>
                    <p>
                        다들 나한테 말해 쉽지 않을 거래 원래 처음이 어려운 거야
                        Liar 내가 길잃은 날 이 선을 넘어가고 싶어 진짜 내 모습을
                        찾아서 Freedom 이제 고민하지 않을게 나를 믿을래 자유롭게
                        날아 저 위로 속박과 굴레에서 어깨 펴 마셔 윗공기 언젠가
                        한편의 시가 되어 그 위에 꽃피우길 아무리 난 돈을 쓸어
                        담아도 널 널 생각해 담아두지 다른 여자들 휙 감아도 난 널
                        생각하지
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
