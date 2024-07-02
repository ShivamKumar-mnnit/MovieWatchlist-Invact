import React from 'react';
import { connect } from 'react-redux';
import { editMovie } from '../redux/actions/movieActions';

const Movie = ({ movie, editMovie }) => {
  const toggleWatched = () => {
    const updatedMovie = {
      ...movie,
      watched: !movie.watched
    };
    editMovie(updatedMovie);
  };

  const handleRatingChange = (e) => {
    const updatedMovie = {
      ...movie,
      rating: parseInt(e.target.value)
    };
    editMovie(updatedMovie);
  };

  const handleReviewChange = (e) => {
    const updatedMovie = {
      ...movie,
      review: e.target.value
    };
    editMovie(updatedMovie);
  };

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Released: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      <p>Watched: <input type="checkbox" checked={movie.watched} onChange={toggleWatched} /></p>
      <p>Rating: 
        <select value={movie.rating} onChange={handleRatingChange}>
          <option value={0}>Not Rated</option>
          <option value={1}>⭐</option>
          <option value={2}>⭐⭐</option>
          <option value={3}>⭐⭐⭐</option>
          <option value={4}>⭐⭐⭐⭐</option>
          <option value={5}>⭐⭐⭐⭐⭐</option>
        </select>
      </p>
      <p>Review: <textarea value={movie.review} onChange={handleReviewChange} /></p>
    </div>
  );
};

export default connect(null, { editMovie })(Movie);
