import React from 'react';
import MoviesCount from './MoviesCount';
import MoviesList from './MoviesList';
import SortComponent from './SortComponent';

const movieCount = 39;

export default function MoviesContainer(){
  return (
    <div>
      <SortComponent/>
      <MoviesCount movieCount={movieCount} />
      <MoviesList/>
    </div>
  )
}
