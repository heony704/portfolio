import './App.scss';
import data from './data';
import Header from './components/Header';
import PortFolio from './components/PortFolio';
import Footer from './components/Footer';

function App() {
    return (
        <div className="body">
            <Header />
            <PortFolio portfolio={data} />
            <Footer />
        </div>
    );
}

export default App;
