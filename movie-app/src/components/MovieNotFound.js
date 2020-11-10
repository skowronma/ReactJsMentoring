import React from 'react';
import { Link } from 'react-router-dom';
const MovieNotFound = () => (
  <div className='notFound'>
    <h1>No Movie Found</h1>
    <p>
      <Link to="/">Go Home </Link>
    </p>
  </div>
);

export default MovieNotFound;
