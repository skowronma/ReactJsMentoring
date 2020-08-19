import React from 'react';
import MoviesCount from './MoviesCount';
import MoviesList from './MoviesList';
import SortComponent from './SortComponent';

let movieCount = 39;

export default function MoviesContainer(){
  return (
    <>
    <SortComponent/>
    <MoviesCount movieCount={movieCount} />
    <MoviesList/>
    </>

)}
