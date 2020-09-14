import { GET_ALL, GET_ALL_ERROR, ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE } from './actionCreator';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL:
      return action.movies;
    case GET_ALL_ERROR:
    return action.error
    default:
      return state
  }
};

export default rootReducer
