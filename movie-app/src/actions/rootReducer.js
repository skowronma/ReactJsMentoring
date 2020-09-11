import { GET_ALL, ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE } from './actionCreator';

const initialState = {
    movies: [],
    error: null
}

let allMovies=[
  {
    title: 'Pulp Fiction',
    genre: 'Crime',
    year: '1994',
    movieUrl : 'Some url',
    overview: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue',
    duration : '154 min',
    image: './images/1.jpg',
    rating: '4.3',
    id: '1'
  },
  {
    title: 'Bohemian Rapsody',
    genre: 'Drama, Biography, Music',
    year: '2003',
    movieUrl : 'Some url',
    overview: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985)',
    image: './images/2.jpg',
    duration: '134 min',
    rating: '4.1',
    id: '2'
  }];

const getAll = (action) => {
  return {
    allMovies
    //  fetch('https://exampleapi.com/products')
  }
}

const movies = (state=initialState, action) => {
  switch (action.type) {
    case GET_ALL:
      movies = [...state, getAll(action)]
      return movies;
    default:
      return state;
  }
}

export default movies;
