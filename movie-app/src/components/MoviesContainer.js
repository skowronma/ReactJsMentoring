import React from 'react';
import MoviesCount from './MoviesCount';
import MoviesList from './MoviesList';
import SortComponent from './SortComponent';

const movieCount = 39;

export default function MoviesContainer(props){
  return (
    <div>
      <SortComponent/>
      <MoviesCount movieCount={movieCount} />
      {props.movies != null ?
      <MoviesList movies={props.movies} onClick={(movie) => props.onClick(movie)}/>
        : <div>Loading</div>
      }
    </div>
  )
}
