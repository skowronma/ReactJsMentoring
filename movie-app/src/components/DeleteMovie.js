import React from 'react';
import Modal from './Modal';
import PropTypes from 'prop-types';

export default function DeleteMovie(props){
  function deleteMovie() {
       console.log('Deleted the movie ' + props.movie.title);
   }
  return (
    <Modal onCloseRequest={props.onCloseRequest}>
     <h1>DELETE MOVIE</h1>
     <div className=''>
     <p>Are you sure you want to delete the movie: {props.movie.title}?</p>
     <button className='' onClick={() => deleteMovie()}>CONFIRM</button>
     </div>
     </Modal>
  )
}

DeleteMovie.propTypes ={
  movie: PropTypes.object.isRequired
}
