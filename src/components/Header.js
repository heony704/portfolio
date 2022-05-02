import '../styles/header.scss';
import { BsDownload } from 'react-icons/bs';

function Header() {
    return (
        <header>
            <div>
                <div className="header">
                    <p className="logo">HEONY's POFO</p>
                    <div className="downloadBtn">
                        <BsDownload />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
