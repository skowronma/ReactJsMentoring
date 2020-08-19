import React from 'react';

export default function Header(props){
  return (
    <div class="header">
      <b className="pageName">{props.pageName}</b>
      <button className="addButton">+ ADD MOVIE</button>
    </div>
  )
}
