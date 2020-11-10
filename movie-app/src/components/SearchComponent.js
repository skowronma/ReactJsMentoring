import React, {useState} from 'react';
import {  Link } from "react-router-dom";

export default function SearchComponent(props){
  const [movieToSearch, setMovieToSearch] = useState('');

  return (
    <div className='searchComponent'>
      <h1>FIND YOUR MOVIE</h1>
      <input type='text'  placeholder='What do you want to watch?'
      value={movieToSearch}
      onChange={event => setMovieToSearch(event.target.value)}
      />
      <Link to={`/search/${movieToSearch}`}>
        <button className='searchButton'>SEARCH</button>
      </Link>
    </div>

  )
}
