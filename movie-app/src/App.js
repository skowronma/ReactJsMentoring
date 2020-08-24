import React from 'react';
import './styles/style.css'
import Header from './components/Header';
import MoviesContainer from './components/MoviesContainer';
import SearchComponent from './components/SearchComponent';
import Separator from './components/Separator';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

var pageName = "netflixroulette";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
          <div className="backgroundImage">
            <Header pageName={pageName}/>
            <SearchComponent/>
          </div>
          <Separator/>
          <MoviesContainer/>
          <Footer displaytext={pageName}/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
