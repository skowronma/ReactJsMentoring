import React from 'react';
import MovieCard from './MovieCard'

let movies=[
{
  title:"Rick and Morty",
  description: "Animated science fiction sitcom",
  id: '1'
},
{
  title:"Stranger Things",
  description: "American science fiction series",
  id: '2'
},
{
  title:"Dark",
  description: "German science fiction series",
  id: '3'
}
]

export default function MoviesList(){
    return  (
    <>
    {
      movies.map((movie)=>(
        <MovieCard title={movie.title}
        description={movie.description}
        key={movie.id}/>
      ))
    }
    </>
  )}
