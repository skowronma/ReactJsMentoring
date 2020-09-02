import React, { useState }  from 'react';
import ContextMenu from './ContextMenu';

export default function ThreeDots() {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const dotsClick = () => {
    setIsContextMenuOpen(true)
  };
  const closeContextMenu = () =>{
    setIsContextMenuOpen(false)
  };
  const menuItems = [
    {
        id: 1,
        text: "Edit"
    },
    {
        id: 2,
        text: "Delete"
    }
  ];

  return (
    <>
      {isContextMenuOpen && <ContextMenu menuItems={menuItems} onClose={closeContextMenu}/>}
      {!isContextMenuOpen &&  <img className='threeDots' src='./images/threeDots.png' alt='three dots' onClick={() => dotsClick()} />}
    </>
  )
}
