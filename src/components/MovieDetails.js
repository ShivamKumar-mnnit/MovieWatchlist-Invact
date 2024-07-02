// src/components/MovieDetails.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../redux/actions/movieActions';
import { useParams } from 'react-router-dom';

const MovieDetails = ({ movies, fetchMovies }) => {
  const { id } = useParams(); // Accessing route parameters to get movie ID

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // Find the movie by id from props.movies
  const movie = movies.find(movie => movie.id === (id)); // Convert id to integer

  // If movie details are still loading or not found, show a loading message
  if (!movie) {
    return <div>Loading...</div>;
  }

  // Render movie details
  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={`${movie.title} Poster`} />
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      {/* Add more details as needed */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { fetchMovies })(MovieDetails);
