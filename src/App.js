import './App.scss';
import data from './data';
import Header from './components/Header';
import { Portfolio } from './components/Portfolio';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="body">
            <Header portfolio={data} />
            <Portfolio portfolio={data} />
            <Footer />
        </div>
    );
}
