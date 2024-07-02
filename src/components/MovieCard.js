import React from "react";
import MovieControls from "./MovieControls";
import imgmovie from './img/imgmovie.png';

const MovieCard = ({ movie, type }) => {

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };


   // Function to slice description to a certain number of words
   const sliceDescription = (description, maxWords) => {
    const words = description.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...'; // Append ellipsis if description is sliced
    } else {
      return description; // Return full description if it's shorter than maxWords
    }
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
{sliceDescription(movie.description, 10)}({movie.releaseYear})
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
