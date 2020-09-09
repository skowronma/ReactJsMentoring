import React from 'react';

export default function MovieReview(props){

  return (
        <div className=''>
            <div>
                <b className='pageName'>{props.pageName}</b>
                <button className='' onClick={props.onClose}>X</button>
            </div>
            <div className=''>
                <div className=''>
                    <img className='' src={props.movie.image} alt='Film poster'/>
                </div>
                <div className=''>
                    <h1 className=''>{props.movie.title}  {props.movie.rating}</h1>
                    <p className=''>{props.movie.genre}</p>
                    <span className=''>{props.movie.year}</span>
                    <span className=''>{props.movie.duration}</span>
                    <p className=''>{props.movie.overview}</p>
                </div>
            </div>
        </div>
    )
}
