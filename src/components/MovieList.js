// src/components/MovieList.js
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, deleteMovie } from '../redux/actions/movieActions';
import EditMovieForm from './EditMovieForm';

const MovieList = ({ movies, fetchMovies, deleteMovie }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleEdit = (movie) => {
    setSelectedMovie(movie);
    setShowEditForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      deleteMovie(id);
    }
  };

  const handleCloseEditForm = () => {
    setShowEditForm(false);
    setSelectedMovie(null);
  };

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> - {movie.description} ({movie.releaseYear})
            <button onClick={() => handleEdit(movie)}>Edit</button>
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {showEditForm && (
        <EditMovieForm movie={selectedMovie} onClose={handleCloseEditForm} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { fetchMovies, deleteMovie })(MovieList);
