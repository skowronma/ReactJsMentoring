export const GET_ALL = 'GET_ALL';
export const GET_ALL_ERROR = 'GET_ALL_ERROR';
export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export function getAllMoviesError(error){
    const action={
        type: GET_ALL_ERROR,
        error
    }
    return action;
}

export function getAllMovies(allMovies){
    const action={
        type: GET_ALL,
        allMovies
    }
    return action;
}

// function fetchPosts(subreddit) {
//   return dispatch => {
//     dispatch(requestPosts(subreddit))
//     return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//       .then(response => response.json())
//       .then(json => dispatch(receivePosts(subreddit, json)))
//   }
// }


export function addMovie(movie){
    const action={
        type: ADD_MOVIE,
        movie
    }
    return action;
}

export function editMovie(movie){
    const action={
        type:EDIT_MOVIE,
        movie
    }
    return action;
}

export function deleteTodo(id){
    const action={
        type:DELETE_MOVIE,
        id
    }
    return action;
}
