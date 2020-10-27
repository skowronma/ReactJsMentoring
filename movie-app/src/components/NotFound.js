import React from 'react';
import { Link } from 'react-router-dom';
import imgLink from '../images/pageNotFound.jpg'
const NotFound = () => (
  <div className='notFound'>
    <img src={imgLink} alt='Page not found'/>
    <p>
      <Link to="/">Go Home </Link>
    </p>
  </div>
);

export default NotFound;
