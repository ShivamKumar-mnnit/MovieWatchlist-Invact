// src/components/MovieList.js
import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchMovies, deleteMovie } from '../redux/actions/movieActions';
import MovieCard from './MovieCard';

const MovieList = ({ movies, fetchMovies, deleteMovie }) => {
  
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);



 



  return (

<div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watch List</h1>
          <span className="count-pill">
            {movies.length} {movies.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {movies.length > 0 ? (
          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} type="watchList" key={movie.id} />
              
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
