import React from 'react';

export default function MovieReview(props){

  return (
        <div className='movieReview'>
            <div>
                <b className='pageName'>{props.pageName}</b>
                <button className='closeButton' onClick={props.onClose}>X</button>
            </div>
            <div>
                <div className='movieReviePoster'>
                    <img className='moviePoster' src={props.movie.image} alt='Film poster'/>
                </div>
                <div>
                    <h1>{props.movie.title}
                      <span className='greenText'>{props.movie.rating}</span>
                    </h1>
                    <p>{props.movie.genre}</p>
                    <span className='redText'>{props.movie.year}</span>
                    <span className='redText'>{props.movie.duration}</span>
                    <p className='movieReviewOverview'>{props.movie.overview}</p>
                </div>
            </div>
        </div>
    )
}
