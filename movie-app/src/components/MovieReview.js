import React from 'react';
import { connect} from 'react-redux';
import { useParams, Link } from "react-router-dom";
import {useEffect,  useState }  from "react";

const mapStateToProps = (state) => ({
  movies  : state.movies,
  })

function MovieReview(props) {
  const { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(null);


  useEffect(() => {
    const filteredMovie = props.movies.find((movie) =>
      movie.id == id
    );
      setSelectedMovie(filteredMovie);
      });

  var movieReviewPanel = selectedMovie != null  ?
  ( <div>
      <div className='movieReviePoster'>
        <img className='moviePoster' src={selectedMovie.poster_path} alt='Film poster'/>
      </div>
      <div>
        <h1>{selectedMovie.title}
          <span className='greenText'>{selectedMovie.vote_average}</span>
        </h1>
        <p>{selectedMovie.genre}</p>
        <span className='redText'>{selectedMovie.release_date}</span>
        <span className='redText'>{selectedMovie.runtime} min</span>
        <p className='movieReviewOverview'>{selectedMovie.overview}</p>
       </div>
      </div>  )
  : (<div>"Loading movie"</div>);

    return (
        <div className='movieReview'>
            <div>
                 <Link to="/">Go Back</Link>
            </div>
                {movieReviewPanel}
            </div>
  )
}

export default connect(mapStateToProps, null)(MovieReview);
