import React from 'react';
import './styles/style.css';
import './styles/modalStyle.css';
import Header from './components/Header';
import MoviesContainer from './components/MoviesContainer';
import SearchComponent from './components/SearchComponent';
import Separator from './components/Separator';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import MovieReview from './components/MovieReview';

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
    duration: '154 min',
    rating: '4.3',
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
    duration: '134 min',
    rating: '4.1',
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
    duration: '120 min',
    rating: '4.5',
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
    duration: '154 min',
    rating: '4.0',
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
    duration: '144 min',
    rating: '3.9',
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
    duration: '104 min',
    rating: '4.0',
    id: '6'
  }
]

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies : allMovies,
      isMovieReview : false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.closeMovieReview = this.closeMovieReview.bind(this);
    this.movie = null;
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

  showMovieReview(movie){
    this.movie = movie;
    this.setState({ isMovieReview: true });
  }

  closeMovieReview(){
    this.movie= null;
    this.setState({ isMovieReview : false });
  }

  render(){
    var movieReviewPanel = this.state.isMovieReview ?
      ( <div>
          <MovieReview movie={this.movie}
           onClose={this.closeMovieReview}/>
        </div>)
    : ( <div className='backgroundImage'>
          <Header pageName={pageName}/>
          <SearchComponent onSearch={this.handleSearch}/>
        </div>)
    return (
    <div className='App'>
      <ErrorBoundary>
        {movieReviewPanel}
        <Separator/>
        <MoviesContainer movies={this.state.movies}
        onClick={ (movie) => this.showMovieReview(movie)}/>
        <Footer displaytext={pageName}/>
      </ErrorBoundary>
    </div>
  )
}
}
