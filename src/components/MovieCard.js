import React from "react";
import MovieControls from "./MovieControls";
import imgmovie from './img/default2.jpg';
import { Link } from "react-router-dom";

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
      <Link className='link' to={`/movie/${movie.id}`} >
      <div className="overlay"></div>
     
      <p className="movie-title" style={{ textAlign: "center", margin: "0", fontSize: "larger" }}>
      <strong>{movie.title}</strong>
      </p>

      

      {
  movie.url ? (
    <img
      src={movie.url}
      alt={`${movie.title} Poster`}
      onError={(e) => {
        e.target.onerror = null; // Prevent infinite loop in case of repeated error
        e.target.src = imgmovie; // Replace with default image URL or handle error condition
        e.target.alt = `${movie.title} Poster`; // Optional: Set alternate text
      }}
    />
  ) : (
    <img
      src={imgmovie} // Replace with the default image URL
      alt={`${movie.title} Poster`}
    />
  )
}

</Link>

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
