import React from 'react';

export default function MovieCard (props){
  return  (
    <div className="MovieCard">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )}
