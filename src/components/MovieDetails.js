// src/components/MovieDetails.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../redux/actions/movieActions';
import { useParams } from 'react-router-dom';
import MovieControls from './MovieControls';
import './Style.css'; // Import your CSS file

const MovieDetails = ({ movies, fetchMovies }) => {
  const { id } = useParams(); // Accessing route parameters to get movie ID

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

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
    <div className="movie-details-container" style={{ backgroundImage: `url(${movie.url})` }}>
      <div className="movie-details">
        <h2>{movie.title}</h2>
        
        <p>{movie.description}</p>
        <p className='p-black'><strong>Release Year: </strong>{movie.releaseYear}</p>
        <p className='p-black'><strong>Rating:</strong>{movie.rating?
      <>{renderStars(movie.rating)}</>: <> unrated</>
        }</p>
        
        <p className='p-black'><strong>Genre: </strong>{movie.genre}</p>
        {
          movie.watched?<><p className='p-black'><strong>Watched <strong/></strong></p></>:<><p className='p-black'><strong>Unwatched <strong/></strong></p></>
        }

          <p className='p-black'> {movie.review?<> <strong>Review: </strong> {movie.review}</>:<>Review not available</> }</p>

<div className="movie-controls-container">
          <MovieControls movie={movie} type={movie.watched?"watched":"watchList"} />
        </div>
        
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { fetchMovies })(MovieDetails);
