// src/components/AddMovieForm.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../redux/actions/movieActions';
import './Style.css'; // Import your CSS file for styling

import { useNavigate } from 'react-router-dom';

const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Date.now().toString(), // Generate a unique ID for the movie
      title,
      description,
      releaseYear: Number(releaseYear), // Convert to number if needed
      genre,
      watched: false, // Default value
      rating: 0, // Default value
      review: '', // Default value
    };
    addMovie(newMovie);
    // Clear input fields after submission
    setTitle('');
    setDescription('');
    setReleaseYear('');
    setGenre('');
    navigate('/');
  };

  return (
    <div className="add-movie-form-container">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit} className="add-movie-form">
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
          rows={4} // Adjust rows based on content
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
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default connect(null, { addMovie })(AddMovieForm);
