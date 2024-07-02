// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MovieList from './components/MovieList';
// import Movie from './components/Movie';
import AddMovieForm from './components/AddMovieForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Movie Manager with Redux</h1>
        <AddMovieForm />
        <MovieList />
      </div>
    </Provider>
  );
}

export default App;
