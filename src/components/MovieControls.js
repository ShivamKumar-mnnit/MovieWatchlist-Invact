import React, { useEffect} from 'react';
import { fetchMovies, deleteMovie } from '../redux/actions/movieActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const MovieControls = ({ movie, type}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);



  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      dispatch(deleteMovie(id));
      navigate('/');
    }
  };





  return (
    <div className="inner-card-controls">
      {type === "watchList" && (
        <>

        {/* <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}> */}
        <button className="ctrl-btn">
            <i className="fa-fw far fa-eye"></i>
          </button>
          
        <button className="ctrl-btn">
            <i className="fa-regular fa-pen-to-square"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => handleDelete(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      
    </div>
  );
};

export default MovieControls;
