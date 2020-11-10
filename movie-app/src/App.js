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
import SearchResult from './components/SearchResult';

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
  }

componentDidMount(){
  this.props.getMovies();
}

componentDidUpdate(prevProps) {
    if (prevProps.movies !== this.props.movies) {
      this.setState({ movies: this.props.movies });
    }
  }

  render(){
    return (
    <div className='App'>
      <ErrorBoundary>
        <Router>
        <div className='backgroundImage'>
          <Header pageName={pageName}/>
          <SearchComponent/>
        </div>
        <Separator/>
        <Switch>
            <Route path='/film/:id'>
              <div>
                <MovieReview/>
              </div>
            </Route>
            <Route name="search" path="/search/:searchedText">
              <SearchResult/>
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
