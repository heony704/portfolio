import '../styles/header.scss';
import { FiDownload } from 'react-icons/fi';

function Header() {
    return (
        <header>
            <div>
                <div className="header">
                    <p className="logo">HEONY's POFO</p>
                    <div className="downloadBtn">
                        <FiDownload />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
