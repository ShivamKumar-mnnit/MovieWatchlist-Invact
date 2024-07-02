import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateMovie } from '../redux/actions/movieActions';
import { useParams, useNavigate } from 'react-router-dom';
import './Style.css';

const EditMovieForm = ({ movies, updateMovie }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((movie) => movie.id === id);

  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);
  const [releaseYear, setReleaseYear] = useState(String(movie.releaseYear));
  const [genre, setGenre] = useState(movie.genre);
  const [rating, setRating] = useState(movie.rating || 0);
  const [review, setReview] = useState(movie.review || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMovie = {
      ...movie,
      title,
      description,
      releaseYear: Number(releaseYear),
      genre,
      rating,
      review,
    };
    updateMovie(updatedMovie);
    alert('Updated successfully');
    navigate(`/movie/${movie.id}`);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-movie-form-container">
      <h2>Edit Movie</h2>
      <form onSubmit={handleSubmit} className="edit-movie-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows={4}
        />
        <input
          type="number"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          placeholder="Release Year"
        />
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Genre"
        />
        <div className="rating-container">
          <label>Rating:</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value} {value === 1 ? 'Star' : 'Stars'}
              </option>
            ))}
          </select>
          <div className="stars">
            {Array.from({ length: rating }, (_, index) => (
              <span key={index} className="star filled">★</span>
            ))}
            {Array.from({ length: 5 - rating }, (_, index) => (
              <span key={index} className="star">☆</span>
            ))}
          </div>
        </div>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Review"
          rows={4}
        />
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { updateMovie })(EditMovieForm);
