import '../styles/header.scss';
import { BsDownload } from 'react-icons/bs';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PortfolioPdf } from './Portfolio';

function Header({ portfolio }) {
    return (
        <header>
            <div>
                <div className="header">
                    <p className="logo">HEONY's POFO</p>
                    <PDFDownloadLink
                        document={<PortfolioPdf portfolio={portfolio} />}
                        fileName={`${portfolio.profile.name} 포트폴리오.pdf`}
                    >
                        {({ blob, url, loading, error }) =>
                            loading ? 'Loading document...' : <BsDownload />
                        }
                    </PDFDownloadLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
