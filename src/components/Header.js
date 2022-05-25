import '../styles/header.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsDownload } from 'react-icons/bs';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PortfolioPdf } from './Portfolio';
import Spinner from './Spinner';
import './PdfFont';

Header.propTypes = {
    portfolio: PropTypes.object
};

export default function Header({ portfolio }) {
    const agent = window.navigator.userAgent.toLowerCase();
    const isMobile = agent.indexOf('moblie') > -1;

    return (
        <header>
            <div>
                <div className="header">
                    <p className="logo">Seungheon's Portfolio</p>
                    {!isMobile && <PdfBtn portfolio={portfolio} />}
                </div>
            </div>
        </header>
    );
}

function PdfBtn({ portfolio }) {
    const [download, setDownload] = useState(false);
    const onClick = () => {
        setDownload(true);
    };

    return (
        <>
            {download ? (
                <PDFDownloadLink
                    document={<PortfolioPdf portfolio={portfolio} />}
                    fileName={`${portfolio.profile.name} 포트폴리오.pdf`}
                >
                    {({ blob, url, loading, error }) =>
                        loading ? (
                            <Spinner />
                        ) : (
                            <div className="btn download">
                                PDF <BsDownload />
                            </div>
                        )
                    }
                </PDFDownloadLink>
            ) : (
                <div className="btn pdf" onClick={onClick}>
                    PDF 변환
                </div>
            )}
        </>
    );
}
