import React from 'react';
import logo from './logo.svg';
import './styles/style.css'
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import SearchComponent from './components/SearchComponent';
import Separator from './components/Separator';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

var pageName = "netflixroulette";

function App() {
  return (
    <div className="App">
    <ErrorBoundary>
        <div>
          <div className="backgroundImage">
            <Header pageName={pageName}/>
            <SearchComponent/>
          </div>
          <Separator/>
          <MoviesList/>
        </div>
        <Footer displaytext={pageName}/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
