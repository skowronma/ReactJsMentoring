import React from 'react';
import PropTypes from 'prop-types';

export default function MoviesCount(props){
return (
  <div className='movieCount'>{props.movieCount} movies found</div>
)}

MoviesCount.propTypes ={
  movieCount: PropTypes.number.isRequired
}
