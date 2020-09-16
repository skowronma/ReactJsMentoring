import React from 'react';

const ContextMenuItems = ({ menuItems }) => menuItems.map((item) =>
        <div className='contextMenuItem' key={item.id} onClick={item.action}>
          {item.text}
        </div>)

const ContextMenu = ({ menuItems, onClose }) =>
      <div className='contextMenu'>
        <span className='contextMenuClose' onClick={onClose}>x</span>
        <ContextMenuItems menuItems={menuItems} />
      </div>

export default ContextMenu
