import '../styles/header.scss';
import { BsDownload } from 'react-icons/bs';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PortfolioPdf } from './Portfolio';
import Spinner from './Spinner';

function Header({ portfolio }) {
    const agent = window.navigator.userAgent.toLowerCase();
    const pdfable = !(
        agent.indexOf('kakaotalk') > 0 ||
        (agent.indexOf('whale') > 0 && agent.indexOf('mobile') > 0) ||
        agent.indexOf('gsa') > 0 ||
        agent.indexOf('naver') > 0
    );

    const onClick = () => {
        alert(
            '해당 브라우저에서는 포트폴리오를 다운로드할 수 없습니다.\n 다른 브라우저로 시도해주세요 :)'
        );
    };

    return (
        <header>
            <div>
                <div className="header">
                    <p className="logo">Seungheon's Portfolio</p>
                    {pdfable ? (
                        <PDFDownloadLink
                            document={<PortfolioPdf portfolio={portfolio} />}
                            fileName={`${portfolio.profile.name} 포트폴리오.pdf`}
                        >
                            {({ blob, url, loading, error }) =>
                                loading ? <Spinner /> : <BsDownload />
                            }
                        </PDFDownloadLink>
                    ) : (
                        <div className="btn" onClick={onClick}>
                            <BsDownload />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
