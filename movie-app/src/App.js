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
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from "./components/NotFound";

var pageName = 'netflixroulette';

function mapStateToProps(state) {
  return {
    movies: state.movies,
  }
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
      movies: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

componentDidMount(){
  this.props.getMovies();
}

componentDidUpdate(prevProps) {
    if (prevProps.movies !== this.props.movies) {
      this.setState({ movies: this.props.movies });
    }
  }

  handleSearch(searchedMovie) {
  if (!searchedMovie) {
    this.setState({ movies: this.props.movies });
    return;
  }

  const filteredMovies = this.state.movies.filter((movie) =>
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
        <Router>
          <Switch>
            <Route path='/film/:id'>
              <div>
                <MovieReview/>
              </div>
            </Route>
            <Route name="search" path="/search/:searchQuery">
            </Route>
            <Route exact path='/'>
              <MoviesContainer movies={this.state.movies}/>
            </Route>
            <Route path='*' component={NotFound} />
          </Switch>
        </Router>
        <Footer displaytext={pageName}/>
      </ErrorBoundary>
    </div>
  )
}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
