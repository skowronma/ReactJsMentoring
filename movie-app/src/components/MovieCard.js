import React from 'react';
import PropTypes from 'prop-types';
import '../styles/movieComponentsStyle.css';

export default function MovieCard (props){
  return  (
    <div className="movieCard">
      <img className="moviePoster" alt="movie poster" src={props.image}/>
      <div className="movieAllInfo">
          <div className="movieInfo">
              <p>{props.title}</p>
              <p>{props.genre}</p>
          </div>
          <div className="movieYear">{props.year}</div>
      </div>
    </div>
  )}

MovieCard.propTypes ={
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
}
