// src/components/MovieList.js
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, deleteMovie } from '../redux/actions/movieActions';
import EditMovieForm from './EditMovieForm';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

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
               <Link to={`/movie/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie} type="watchList" key={movie.id} />
              </Link>
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No Movies In Watch List</h2>
        )}
      </div>
    </div>


// <div>
      
// <ul>
//   {movies.map((movie) => (
//       <MovieCard movie={movie} type="watchList" key={movie.id} />
//     <li key={movie.id}>
//       {/* <strong>{movie.title}</strong> - {movie.description} ({movie.releaseYear})
//       <button onClick={() => handleEdit(movie)}>Edit</button>
//       <button onClick={() => handleDelete(movie.id)}>Delete</button> */}
//     </li>
//   ))}
// </ul>
// {showEditForm && (
//   <EditMovieForm movie={selectedMovie} onClose={handleCloseEditForm} />
// )}
// </div>
   
    


  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { fetchMovies, deleteMovie })(MovieList);
