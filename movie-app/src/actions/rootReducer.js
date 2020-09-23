import { GET_ALL, GET_ALL_ERROR, ADD_MOVIE, EDIT_MOVIE } from './actionCreator';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL:
      return action.movies;
    case GET_ALL_ERROR:
    return action.error;
    case ADD_MOVIE:
      return action.movie;
    case EDIT_MOVIE:
      return action.movie;
    default:
      return state
  }
};

export default rootReducer
