import React from 'react';
import MovieCard from './MovieCard'
import '../styles/movieComponentsStyle.css';

let movies=[
  {
    title: 'Pulp Fiction',
    genre: 'crime',
    year: '1994',
    movieUrl : 'Some url',
    overview: 'Some desctription',
    runtime : '',
    image: './images/1.jpg',
    id: '1'
  },
  {
    title: 'Bohemian Rapsody',
    genre: 'Drama, Biography, Music',
    year: '2003',
    movieUrl : 'Some url',
    overview: 'Some desctription',
    runtime : '',
    image: './images/2.jpg',
    id: '2'
  },
  {
    title: 'Kill Bill: Vol 2',
    genre: 'Oscar Winning Movie',
    year: '1994',
    movieUrl : 'Some url',
    overview: 'Some desctription',
    runtime : '',
    image: './images/3.jpg',
    id: '3'
  },
  {
    title: 'Avengers: Infinity War',
    genre: 'Action & Adventure',
    year: '2004',
    movieUrl : 'Some url',
    overview: 'Some desctription',
    runtime : '',
    image: './images/4.jpg',
    id: '4'
  },
  {
    title: 'Inception',
    genre: 'Action & Adventure',
    year: '2003',
    movieUrl : 'Some url',
    overview: 'Some desctription',
    runtime : '',
    image: './images/5.jpg',
    id: '5'
  },
  {
    title: 'Reservoir dogs',
    genre: 'Oscar Winning Movie',
    year: '1994',
    movieUrl : 'Some url',
    overview: 'Some desctription',
    runtime : '',
    image: './images/6.jpg',
    id: '6'
  }
]

export default function MoviesList(){
    return (
    <div className='moviesList'>
    {
      movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id}/>
      ))
    }
    </div>
  )
}
