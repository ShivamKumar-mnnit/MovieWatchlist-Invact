// src/redux/actions/movieActions.js
import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const fetchMoviesSuccess = (movies) => ({
  type: 'FETCH_MOVIES_SUCCESS',
  payload: movies,
});

export const addMovieSuccess = (movie) => ({
  type: 'ADD_MOVIE_SUCCESS',
  payload: movie,
});

export const updateMovieSuccess = (updatedMovie) => ({
  type: 'UPDATE_MOVIE_SUCCESS',
  payload: updatedMovie,
});


export const deleteMovieSuccess = (id) => ({
  type: 'DELETE_MOVIE_SUCCESS',
  payload: id,
});

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/movies`);
      dispatch(fetchMoviesSuccess(response.data));
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
};

export const addMovie = (newMovie) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/movies`, newMovie);
      dispatch(addMovieSuccess(response.data));
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };
};

export const updateMovie = (updatedMovie) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${API_URL}/movies/${updatedMovie.id}`, updatedMovie);
      dispatch(updateMovieSuccess(response.data));
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };
};


export const deleteMovie = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_URL}/movies/${id}`);
      dispatch(deleteMovieSuccess(id));
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };
};
