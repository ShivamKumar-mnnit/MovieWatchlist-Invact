// src/redux/reducers/movieReducer.js
const initialState = {
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.payload,
      };
    case 'ADD_MOVIE_SUCCESS':
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
      // src/redux/reducers/movieReducer.js
    case 'UPDATE_MOVIE_SUCCESS':
      return {
        ...state,
        movies: state.movies.map(movie =>
        movie.id === action.payload.id ? action.payload : movie
        ),
      };
    case 'DELETE_MOVIE_SUCCESS':
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload),
      };
    default:
      return state;
  }
};

export default movieReducer;
