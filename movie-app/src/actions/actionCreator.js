export const GET_ALL = 'GET_ALL';
export const GET_ALL_ERROR = 'GET_ALL_ERROR';
export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export const getAllMoviesError = (error) => {
  const action={
        type: GET_ALL_ERROR,
        error: error
    }
    return action;
}

export const getAllMovies = (movies) => {
    const action={
        type: GET_ALL,
        movies: movies
    }

    return action;
}

export const addMovie = (movie) => {
    const action={
        type: ADD_MOVIE,
        movie: movie
    }
    return action;
}

export const editMovie = (movie) => {
    const action={
        type:EDIT_MOVIE,
        movie: movie
    }
    return action;
}

export const deleteMovie = (id) =>{
    const action={
        type:DELETE_MOVIE,
        id : id
    }
    return action;
}


export const getMovies = () => {
  return dispatch => {
    fetch('http://localhost:4000/movies')
      .then(response => response.json())
      .then(movies => {
        dispatch(getAllMovies(movies));
      })
      .catch(error => {
        console.log(error);
        dispatch(getAllMoviesError(error));
      })
  }
}

export const updateMovies = (movie) =>{
  const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie)
  };
  return dispatch => {
   fetch('http://localhost:4000/movies', requestOptions)
   .then(async response => {
     var data = await response.json();
     if (!response.ok) {
         const error = (data && data.messages) || response.status;
         return Promise.reject(error);
           }
         alert("Movie was edited");
        dispatch(addMovie(data));
   })
    .catch(error => {
      console.log(error);
      alert("Movie update failed, please try again! " + error);
    })
   }
}


export const addMovies = (movie) => {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie)
  };
  return dispatch => {
   fetch('http://localhost:4000/movies', requestOptions)
    .then(async response => {
      var data = await response.json();
      if (!response.ok) {
          const error = (data && data.messages) || response.status;
          return Promise.reject(error);
            }
          alert("Movie was added");
         dispatch(addMovie(data));
    })
    .catch(error => {
      console.log(error);
      alert("Adding movie failed, please try again! Error: " + error);
    })
   }
}

export default getMovies;
