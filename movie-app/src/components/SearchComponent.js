import React from 'react';

export default function SearchComponent(){
  return (
    <div className='searchComponent'>
      <h1>FIND YOUR MOVIE</h1>
      <input type='text' placeholder='What do you want to watch?' />
      <button className='searchButton'>SEARCH</button>
    </div>

  )
}
