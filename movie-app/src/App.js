import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/style.css'
import Header from './components/Header';
import MoviesList from './components/MoviesList';
import SearchComponent from './components/SearchComponent';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <div className="backgroundImage">
      <Header pageName="netflixroulette"/>
      <SearchComponent/>
    </div>
      <MoviesList/>
      <Footer displaytext="netflixroulette"/>
    </div>
  );
}

export default App;
