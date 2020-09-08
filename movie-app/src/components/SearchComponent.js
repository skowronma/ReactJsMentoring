import React, {useState} from 'react';

export default function SearchComponent(props){
  const [movieToSearch, setMovieToSearch] = useState('');

  return (
    <div className='searchComponent'>
      <h1>FIND YOUR MOVIE</h1>
      <input type='text'  placeholder='What do you want to watch?'
      value={movieToSearch}
      onChange={event => setMovieToSearch(event.target.value)}
      />
      <button className='searchButton'
       onClick={() => props.onSearch(movieToSearch)}
       >SEARCH</button>
    </div>

  )
}
