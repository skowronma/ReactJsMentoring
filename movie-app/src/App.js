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
import * as actions from './actions/actionCreator';
import { connect } from 'react-redux';

var pageName = 'netflixroulette';
var allMovies=[];
function mapStateToProps(state) {
  return {
    movies: state.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: () => dispatch(actions.getMovies()),
  };
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMovieReview : false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.closeMovieReview = this.closeMovieReview.bind(this);
    this.movie = null;
  }

componentDidMount(){
  this.props.getMovies();
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
    const {movies} = this.props;
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
        <MoviesContainer movies={movies}
        onClick={ (movie) => this.showMovieReview(movie)}/>
        <Footer displaytext={pageName}/>
      </ErrorBoundary>
    </div>
  )
}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
