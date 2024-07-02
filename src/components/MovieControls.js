

// src/components/MovieControls.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteMovie, markAsWatched, markAsUnwatched } from '../redux/actions/movieActions';
import { Link } from 'react-router-dom';

const MovieControls = ({ movie, type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      dispatch(deleteMovie(id));
      navigate('/');
    }
  };

  const handleMarkAsWatched = (id) => {
    dispatch(markAsWatched(id));
  };

  const handleMarkAsUnwatched = (id) => {
    dispatch(markAsUnwatched(id));
  };

  return (
    <div className="inner-card-controls">
      {type === "watchList" && (
        <>
          <button className="ctrl-btn" onClick={() => handleMarkAsWatched(movie.id)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <Link to={`/edit/${movie.id}`} movie>
<button className="ctrl-btn">
    <i className="fa-regular fa-pen-to-square"></i>
  </button>
  </Link>

          <button className="ctrl-btn" onClick={() => handleDelete(movie.id)}>
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => handleMarkAsUnwatched(movie.id)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <Link to={`/edit/${movie.id}`} movie>
<button className="ctrl-btn">
    <i className="fa-regular fa-pen-to-square"></i>
  </button>
  </Link>

          <button className="ctrl-btn" onClick={() => handleDelete(movie.id)}>
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
