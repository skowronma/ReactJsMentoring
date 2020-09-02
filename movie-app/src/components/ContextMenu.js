import React from 'react';

export default function ContextMenu(props) {

const contextMenuitems = props.menuItems.map((item) => (
    <div className='contextMenuItem' key={item.id} onClick={item.action}>{item.text}</div>
  ))

  return (
      <div className='contextMenu'>
        <span className='contextMenuClose' onClick={props.onClose}>x</span>
          {contextMenuitems}
        </div>
  )
}
