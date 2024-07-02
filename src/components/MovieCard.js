import React from "react";
import MovieControls from "./MovieControls";
import imgmovie from './imgmovie.png';

const MovieCard = ({ movie, type }) => {

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="movie-card">
      <div className="overlay"></div>
     
      
      <p style={{ textAlign: "center", margin: "0", fontSize: "medium" }}>
      <strong>{movie.title}</strong>
      </p>
      


      {movie.poster_path ? (
        <img
          src={(imgmovie)}
          alt={`${movie.title} Poster`}
        />
      ) : (

        <img
          src={(imgmovie)}
          alt={`${movie.title} Poster`}
        />
            )}


      <MovieControls movie={movie} type={type}  />

<div className="movie-desc">
      {movie.description} ({movie.releaseYear})
      <br />
      <strong> Genre:</strong> {movie.genre}
      <br />
<strong>Ratings: </strong>
        {movie.rating?
      <>{renderStars(movie.rating)}</>: <> unrated</>
        }
</div>
    </div>
  );
};

export default MovieCard;
