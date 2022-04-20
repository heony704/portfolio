import './components.scss';
import { FiDownload } from 'react-icons/fi';

function Header() {
    return (
        <header>
            <div className="header">
                <div className="contents">
                    <p>HEONY's POFO</p>
                    <div>
                        <FiDownload />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
