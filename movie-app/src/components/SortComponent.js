import React from 'react';
import '../styles/sortComponentStyle.css';

let genres = [
  {
    genre: "ALL",
    id: 1
  },
  {
    genre: "DOCUMENTARY",
    id: 2
  },
  {
    genre: "COMEDY",
    id: 3
  },
  {
    genre: "HORROR",
    id: 4
  },
  {
    genre: "CRIME",
    id: 5
  },
];

export default function SortComponent(){
return (
  <div>
   {genres.map((movieGenre)=>(
      <button className="genreButton" key={movieGenre.id}>{movieGenre.genre}</button>
      )
   )}
     <form className="sort">
        <label>SORT BY
          <select>
            <option value="releaseDate">RELEASE DATE</option>
            <option value="name">NAME</option>
          </select >
        </label>
      </form>
   </div>
)
}
