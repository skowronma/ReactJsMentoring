export const GET_ALL = 'GET_ALL';
export const GET_ALL_ERROR = 'GET_ALL_ERROR';
export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export function getAllMoviesError(error){
  const action={
        type: GET_ALL_ERROR,
        error: error
    }
    return action;
}

export function getAllMovies(movies){
    const action={
        type: GET_ALL,
        movies: movies
    }

    return action;
}

export function addMovie(movie){
    const action={
        type: ADD_MOVIE,
        movie: movie
    }
    return action;
}

export function editMovie(movie){
    const action={
        type:EDIT_MOVIE,
        movie: movie
    }
    return action;
}

export function deleteTodo(id){
    const action={
        type:DELETE_MOVIE,
        id : id
    }
    return action;
}

export function getMovies() {
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

export function updateMovies(movie) {
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


export default function addMovies(movie) {
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
