import React from 'react';

export default function ThreeDots() {
  const dotsClick = () => { console.log('Clicked three dots image')};
  return (
    <img className='threeDots' src='./images/threeDots.png' alt='three dots' onClick={() => dotsClick()} />
  )
}
