import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/movieComponentsStyle.css';
import ThreeDots from './ThreeDots'

export default function MovieCard (props){
  const [isShown, setIsShown] = useState(false);

  return  (
    <div
      className='movieCard'
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      {isShown && <ThreeDots/>}
      <img className='moviePoster' alt='movie poster' src={props.image}/>
      <div className='movieAllInfo'>
        <div className='movieInfo'>
            <p>{props.title}</p>
            <p>{props.genre}</p>
        </div>
        <div className='movieYear' >{props.year}</div>
      </div>
    </div>
  )
}

MovieCard.propTypes ={
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
}
