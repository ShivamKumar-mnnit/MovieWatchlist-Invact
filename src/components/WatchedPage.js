// src/components/WatchedPage.js

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, markAsUnwatched } from '../redux/actions/movieActions';
import MovieCard from './MovieCard';

const WatchedPage = ({ watchedMovies, fetchMovies, markAsUnwatched }) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleMarkAsUnwatched = (id) => {
    markAsUnwatched(id);
  };

  // Filter watched movies based on search term
  const filteredWatchedMovies = watchedMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>
          <span className="count-pill">
            {filteredWatchedMovies.length} {filteredWatchedMovies.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search watched movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {filteredWatchedMovies.length > 0 ? (
          <div className="movie-grid">
            {filteredWatchedMovies.map((movie) => (
              <MovieCard
                movie={movie}
                type="watched"
                key={movie.id}
                onMarkAsUnwatched={handleMarkAsUnwatched}
              />
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
