// AddMovieForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../redux/actions/movieActions';

const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      releaseYear: Number(releaseYear),
      genre,
    };
    addMovie(newMovie);
    setTitle('');
    setDescription('');
    setReleaseYear('');
    setGenre('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} placeholder="Release Year" />
      <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default connect(null, { addMovie })(AddMovieForm);
