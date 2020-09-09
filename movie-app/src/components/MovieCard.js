import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/movieComponentsStyle.css';
import ThreeDots from './ThreeDots'
import ContextMenu from './ContextMenu';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';

export default function MovieCard (props){
  const [isShown, setIsShown] = useState(false);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const closeContextMenu = () => {
    setIsContextMenuOpen(false)
  };

  const editMovie = () => {
    console.log('Movie title to edit is ' +  props.movie.title)
    setIsContextMenuOpen(false)
    setIsEditModalOpen(true)
  };

  const deleteMovie = () => {
    console.log('Movie title to delete is ' +  props.movie.title)
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

  var showEditMovie = isEditModalOpen
            ? ( <EditMovie movie={props.movie}
              onCloseRequest={closeEditMovie}/>)
            : '';

  var showDeleteMovie = isDeleteModalOpen
            ? ( <DeleteMovie movie={props.movie}
              onCloseRequest={closeDeleteMovie}/>)
            : '';
            
  const showMovieReview = () => {
    props.onClick(props.movie)
  };

  return  (
    <div
      className='movieCard'
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
      {isShown && <ThreeDots dotsClick={dotsClick}/>}
      {isContextMenuOpen && <ContextMenu menuItems={menuItems} onClose={closeContextMenu}/>}
      {isDeleteModalOpen && showDeleteMovie}
      {isEditModalOpen && showEditMovie}
      <img className='moviePoster' alt='movie poster' src={props.movie.image}
      onClick={() => showMovieReview()}/>
      <div className='movieAllInfo'>
        <div className='movieInfo'>
            <p>{props.movie.title}</p>
            <p>{props.movie.genre}</p>
        </div>
        <div className='movieYear' >{props.movie.year}</div>
      </div>
    </div>
  )
}

MovieCard.propTypes ={
  movie: PropTypes.object.isRequired
}
