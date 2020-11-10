import { GET_ALL, GET_ALL_ERROR, ADD_MOVIE, EDIT_MOVIE } from './actionCreator';

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL:
      return {...state, movies : action.movies.data};
    case GET_ALL_ERROR:
    return action.error;
    case ADD_MOVIE:
      return {...state, movie :  action.movie};
    case EDIT_MOVIE:
      return {...state, movie: action.movie };
    default:
      return state
  }
};

export default rootReducer
