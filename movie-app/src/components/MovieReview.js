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
                    <img className='moviePoster' src={props.movie.poster_path} alt='Film poster'/>
                </div>
                <div>
                    <h1>{props.movie.title}
                      <span className='greenText'>{props.movie.vote_average}</span>
                    </h1>
                    <p>{props.movie.genre}</p>
                    <span className='redText'>{props.movie.release_date}</span>
                    <span className='redText'>{props.movie.runtime} min</span>
                    <p className='movieReviewOverview'>{props.movie.overview}</p>
                </div>
            </div>
        </div>
    )
}
