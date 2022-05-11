import '../styles/header.scss';
import { BsDownload } from 'react-icons/bs';
// import ReactPDF from '@react-pdf/renderer';
import { Document, Page, Text } from '@react-pdf/renderer';
// import PortfolioPdf from './PortfolioPdf';

function Header({ portfolio }) {
    const onClick = () => {
        // ReactPDF.render(<PortfolioPdf />, `example.pdf`);
    };

    return (
        <header>
            <div>
                <div className="header">
                    <p className="logo">HEONY's POFO</p>
                    <div className="downloadBtn" onClick={onClick}>
                        <BsDownload />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
