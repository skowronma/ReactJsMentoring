import React from 'react';
import MoviesCount from './MoviesCount';
import MoviesList from './MoviesList';
import SortComponent from './SortComponent';

export default function MoviesContainer(props){
  return (
    <div>
      <SortComponent/>
      {props.movies != null ?
      <>
        <MoviesCount movieCount={props.movies.length} />
        <MoviesList movies={props.movies} onClick={(movie) => props.onClick(movie)}/>
      </>
        : <div>Loading</div>
      }
    </div>
  )
}
