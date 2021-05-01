import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NominationsContext from './contexts/Nominations/NominationsContext';
import SearchContext from './contexts/Search/SearchContext';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <NominationsContext>  
        <SearchContext>
          <Header />
          <HomePage />
          <Footer />
        </SearchContext>
      </NominationsContext>
    </div>
  );
}

export default App;
