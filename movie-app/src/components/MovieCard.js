import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/movieComponentsStyle.css';
import ThreeDots from './ThreeDots'
import ContextMenu from './ContextMenu';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';

function MovieCard ({movie, onClick}){
  const [isShown, setIsShown] = useState(false);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const closeContextMenu = () => {
    setIsContextMenuOpen(false)
  };

  const editMovie = () => {
    console.log('Movie title to edit is ' +  movie.title)
    setIsContextMenuOpen(false)
    setIsEditModalOpen(true)
  };

  const deleteMovie = () => {
    console.log('Movie title to delete is ' +  movie.title)
    setIsContextMenuOpen(false)
    setIsDeleteModalOpen(true)
  };

  const closeEditMovie = () =>{
    setIsEditModalOpen(false)
   }
  const closeDeleteMovie = () =>{
     setIsDeleteModalOpen(false)
  }

  const menuItems = [
    {
        id: 1,
        text: "Edit",
        action: () => editMovie()
    },
    {
        id: 2,
        text: "Delete",
        action: () => deleteMovie()
    }
  ];

    const dotsClick = () => {
      setIsContextMenuOpen(true)
    };

  const showMovieReview = () => {
    onClick(movie)
  };

  return  (
    <div
      className='movieCard'
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      {isShown && <ThreeDots dotsClick={dotsClick}/>}
      {isContextMenuOpen && <ContextMenu menuItems={menuItems} onClose={closeContextMenu}/>}
      {isDeleteModalOpen && <DeleteMovie movie={movie} onCloseRequest={closeDeleteMovie}/>}
      {isEditModalOpen && <EditMovie movie={movie} onCloseRequest={closeEditMovie}/>}
      <img className='moviePoster' alt='movie poster' src={movie.poster_path}
      onClick={() => showMovieReview()}/>
      <div className='movieAllInfo'>
        <div className='movieInfo'>
            <p>{movie.title}</p>
            <p>{movie.genre}</p>
        </div>
        <div className='movieYear' >{movie.release_date}</div>
      </div>
    </div>
  )
}

MovieCard.propTypes ={
  movie: PropTypes.object.isRequired
}

export default MovieCard
