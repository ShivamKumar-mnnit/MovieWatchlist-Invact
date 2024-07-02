// src/components/WatchedPage.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, markAsUnwatched } from '../redux/actions/movieActions';
import MovieCard from './MovieCard';

const WatchedPage = ({ watchedMovies, fetchMovies, markAsUnwatched }) => {
  
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleMarkAsUnwatched = (id) => {
    markAsUnwatched(id);
  };

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>
          <span className="count-pill">
            {watchedMovies.length} {watchedMovies.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {watchedMovies.length > 0 ? (
          <div className="movie-grid">
            {watchedMovies.map((movie) => (
              <MovieCard movie={movie} type="watched" key={movie.id} onMarkAsUnwatched={handleMarkAsUnwatched} />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No Movies Watched Yet</h2>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  watchedMovies: state.movies.movies.filter(movie => movie.watched),
});

export default connect(mapStateToProps, { fetchMovies, markAsUnwatched })(WatchedPage);
