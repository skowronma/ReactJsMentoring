import React from 'react';
import './styles/style.css';
import './styles/modalStyle.css';
import Header from './components/Header';
import MoviesContainer from './components/MoviesContainer';
import SearchComponent from './components/SearchComponent';
import Separator from './components/Separator';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

var pageName = 'netflixroulette';
let allMovies=[
  {
    title: 'Pulp Fiction',
    genre: 'crime',
    year: '1994',
    movieUrl : 'Some url',
    overview: 'Some description',
    runtime : '...',
    image: './images/1.jpg',
    id: '1'
  },
  {
    title: 'Bohemian Rapsody',
    genre: 'Drama, Biography, Music',
    year: '2003',
    movieUrl : 'Some url',
    overview: 'Some description',
    runtime : '...',
    image: './images/2.jpg',
    id: '2'
  },
  {
    title: 'Kill Bill: Vol 2',
    genre: 'Oscar Winning Movie',
    year: '1994',
    movieUrl : 'Some url',
    overview: 'Some description',
    runtime : '...',
    image: './images/3.jpg',
    id: '3'
  },
  {
    title: 'Avengers: Infinity War',
    genre: 'Action & Adventure',
    year: '2004',
    movieUrl : 'Some url',
    overview: 'Some description',
    runtime : '...',
    image: './images/4.jpg',
    id: '4'
  },
  {
    title: 'Inception',
    genre: 'Action & Adventure',
    year: '2003',
    movieUrl : 'Some url',
    overview: 'Some description',
    runtime : '...',
    image: './images/5.jpg',
    id: '5'
  },
  {
    title: 'Reservoir dogs',
    genre: 'Oscar Winning Movie',
    year: '1994',
    movieUrl : 'Some url',
    overview: 'Some description',
    runtime : '...',
    image: './images/6.jpg',
    id: '6'
  }
]

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies : allMovies
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchedMovie) {
  if (!searchedMovie) {
    this.setState({ movies: allMovies });
  }

  const filteredMovies = allMovies.filter((movie) =>
    movie.title
      .toLocaleLowerCase()
      .includes(searchedMovie.toLocaleLowerCase())
  );

  this.setState({ movies: filteredMovies });
  }

  render(){
    return (
    <div className='App'>
      <ErrorBoundary>
        <div className='backgroundImage'>
          <Header pageName={pageName}/>
          <SearchComponent onSearch={this.handleSearch}/>
        </div>
        <Separator/>
        <MoviesContainer movies={this.state.movies}/>
        <Footer displaytext={pageName}/>
      </ErrorBoundary>
    </div>
  )
}
}
