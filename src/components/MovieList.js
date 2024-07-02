import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, deleteMovie } from '../redux/actions/movieActions';
import MovieCard from './MovieCard';

const MovieList = ({ movies, fetchMovies, deleteMovie }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // Filter movies based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults(movies);
    } else {
      const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredMovies);
    }
  }, [searchTerm, movies]);

  // Filter out watched movies
  const unwatchedMovies = searchResults.filter(movie => !movie.watched);

  const handleDelete = (id) => {
    deleteMovie(id);
  };

  return (
    <div className="movie-page WatchList-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watch List</h1>
          <span className="count-pill">
            {unwatchedMovies.length} {unwatchedMovies.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        <div className="search-bar">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        {unwatchedMovies.length > 0 ? (
          <div className="movie-grid">
            {unwatchedMovies.map((movie) => (
              <MovieCard movie={movie} type="watchList" key={movie.id} onDelete={handleDelete} />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No Movies In Watch List</h2>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { fetchMovies, deleteMovie })(MovieList);
