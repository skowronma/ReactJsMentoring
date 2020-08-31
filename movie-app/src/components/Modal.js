import React from 'react';
import PropTypes from 'prop-types';
import '../styles/modalStyle.css';

export default function Modal(props){
  return (
    <div className='modalOverlay'>
      <div className='modal'>
        <b className='pageName'>{props.pageName}</b>
        <button
          type='button'
          className='closeButton'
          onClick={props.onCloseRequest}
        >
        X</button>
        {props.children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  onCloseRequest: PropTypes.func.isRequired,
   children: PropTypes.oneOfType([
     PropTypes.arrayOf(PropTypes.node),
     PropTypes.node
   ]).isRequired
}
