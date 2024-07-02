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
    case 'MARK_AS_WATCHED_SUCCESS':
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.id === action.payload ? { ...movie, watched: true } : movie
        ),
      };
    case 'MARK_AS_UNWATCHED_SUCCESS':
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.id === action.payload ? { ...movie, watched: false } : movie
        ),
      };
    case 'RATE_MOVIE_SUCCESS':
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.id === action.payload.id ? { ...movie, rating: action.payload.rating } : movie
        ),
      };
    case 'REVIEW_MOVIE_SUCCESS':
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.id === action.payload.id ? { ...movie, review: action.payload.review } : movie
        ),
      };
    default:
      return state;
  }
};

export default movieReducer;
