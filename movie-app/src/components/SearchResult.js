import React from 'react';
import MoviesContainer from './MoviesContainer';
import MovieNotFound from "./MovieNotFound";
import { useParams, Link } from "react-router-dom";
import {useEffect,  useState }  from "react";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  movies  : state.movies,
  })

  function SearchResult(props) {
    const { searchedText } = useParams();
    const [searchedMovie, setSearchedMovie] = useState(null);

    useEffect(() => {
      if (!searchedText) {
        return;
      }
      const filteredMovies = props.movies.filter((movie) =>
        movie.title
          .toLocaleLowerCase()
          .includes(searchedText.toLocaleLowerCase())
      );
        setSearchedMovie(filteredMovies);
        });

    var showMovies = searchedMovie != null ?
        (<MoviesContainer movies={searchedMovie}/>)
        : (<MovieNotFound/>);

        return (
            <div>
              <div>
                   <Link to="/">Go Back</Link>
              </div>
                {showMovies}
            </div>
      )
    }

    export default connect(mapStateToProps, null)(SearchResult);
