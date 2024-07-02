// EditMovieForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateMovie } from '../redux/actions/movieActions';

const EditMovieForm = ({ movie, updateMovie, onClose }) => {
  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);
  const [releaseYear, setReleaseYear] = useState(movie.releaseYear);
  const [genre, setGenre] = useState(movie.genre);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedMovie = {
      ...movie,
      title,
      description,
      releaseYear: Number(releaseYear),
      genre,
    };
    updateMovie(updatedMovie); // Dispatch update action
    onClose(); // Close edit form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} placeholder="Release Year" />
      <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" />
      <button type="submit">Update Movie</button>
    </form>
  );
};

export default connect(null, { updateMovie })(EditMovieForm);
