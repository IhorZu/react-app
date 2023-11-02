import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import MainContent from '../MainContent/MainContent';
import './App.scss';

const App = () => {

    return (
        <div className="app">
            <Header />
            <Navigation />
            <MainContent />
        </div>
    );
}

export default App;
