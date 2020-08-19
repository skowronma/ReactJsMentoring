import React from 'react';
import PropTypes from 'prop-types';

export default function MovieCard (props){
  return  (
    <div className="MovieCard">
      <img className="movieposter" alt="movie poster" src={props.image}/>
      <div>
        <div>
          <p>{props.title}</p>
          <p>{props.genre}</p>
        </div>
          <p>{props.year}</p>
      </div>
    </div>
  )}

MovieCard.propTypes ={
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
}
