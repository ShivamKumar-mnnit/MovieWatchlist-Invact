// src/components/Movie.js

import React from 'react';
import { connect } from 'react-redux';
import { markAsWatched, markAsUnwatched, rateMovie, reviewMovie } from '../redux/actions/movieActions';

const Movie = ({ movie, markAsWatched, markAsUnwatched, rateMovie, reviewMovie }) => {

  const toggleWatched = () => {
    if (movie.watched) {
      markAsUnwatched(movie.id);
    } else {
      markAsWatched(movie.id);
    }
  };

  const handleRatingChange = (e) => {
    rateMovie(movie.id, parseInt(e.target.value));
  };

  const handleReviewChange = (e) => {
    reviewMovie(movie.id, e.target.value);
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

export default connect(null, { markAsWatched, markAsUnwatched, rateMovie, reviewMovie })(Movie);
