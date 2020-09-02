import React from 'react';

export default function ThreeDots(props) {
  return (
    <>
      <img className='threeDots' src='./images/threeDots.png' alt='three dots' onClick={props.dotsClick} />
    </>
  )
}
