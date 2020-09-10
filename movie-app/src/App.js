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
    genre: 'Crime',
    year: '1994',
    movieUrl : 'Some url',
    overview: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue',
    duration : '154 min',
    image: './images/1.jpg',
    rating: '4.3',
    id: '1'
  },
  {
    title: 'Bohemian Rapsody',
    genre: 'Drama, Biography, Music',
    year: '2003',
    movieUrl : 'Some url',
    overview: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985)',
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
    overview: 'The Bride continues her quest of vengeance against her former boss and lover Bill, the reclusive bouncer Budd, and the treacherous, one-eyed Elle',
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
    overview: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
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
    overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
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
    overview: 'When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant',
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
          <MovieReview movie={this.movie} pageName={pageName}
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
