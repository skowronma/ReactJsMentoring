import React, { useState }  from 'react';
import ContextMenu from './ContextMenu';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';

export default function ThreeDots(props) {
  var movie = props.movie;
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const dotsClick = () => {
    setIsContextMenuOpen(true)
  };
  const closeContextMenu = () => {
    setIsContextMenuOpen(false)
  };

  const editMovie = () => {
    setIsContextMenuOpen(false)
    console.log('Movie title to edit is ' +  movie.title)
    setIsEditModalOpen(true)
  };

  const deleteMovie = () => {
    setIsContextMenuOpen(false)
    console.log('Movie title to delete is ' +  movie.title)
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

  var showEditMovie = isEditModalOpen
            ? ( <EditMovie movie={movie}
              onCloseRequest={closeEditMovie}/>)
            : '';

  var showDeleteMovie = isDeleteModalOpen
            ? ( <DeleteMovie movie={movie}
              onCloseRequest={closeDeleteMovie}/>)
            : '';

  return (
    <>
      {isContextMenuOpen && <ContextMenu menuItems={menuItems} onClose={closeContextMenu}/>}
      {!isContextMenuOpen &&  <img className='threeDots' src='./images/threeDots.png' alt='three dots' onClick={() => dotsClick()} />}
      {isDeleteModalOpen && showDeleteMovie}
      {isEditModalOpen && showEditMovie}
    </>
  )
}
