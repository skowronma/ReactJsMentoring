import React from 'react';
import MoviesCount from './MoviesCount';
import SortComponent from './SortComponent';
import MovieCard from './MovieCard';

export default function MoviesContainer(props){
  return (
    <div>
      <SortComponent/>
      {props.movies != null ?
      <>
        <MoviesCount movieCount={props.movies.length} />
        <div className='moviesList'>
        {
          props.movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id}/>
          ))
        }
        </div>
      </>
        : <div>Loading...</div>
      }
    </div>
  )
}
