import React, {useState} from 'react';

export default function SearchComponent(){
  const [movieToSearch, setMovieToSearch] = useState('');
  function searchMovie() {
       console.log('Searching for movie ' + movieToSearch);
   }
  return (
    <div className='searchComponent'>
      <h1>FIND YOUR MOVIE</h1>
      <input type='text'  placeholder='What do you want to watch?'
      value={movieToSearch}
      onChange={event => setMovieToSearch(event.target.value)}
      />
      <button className='searchButton' onClick={() => searchMovie()}>SEARCH</button>
    </div>

  )
}
