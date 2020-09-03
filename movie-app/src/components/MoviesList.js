import React from 'react';
import MovieCard from './MovieCard'
import '../styles/movieComponentsStyle.css';

export default function MoviesList(props){
    return (
    <div className='moviesList'>
    {
      props.movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id}/>
      ))
    }
    </div>
  )
}
