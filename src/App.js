// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import Header from './components/Header';
import './App.css'
import MovieDetails from './components/MovieDetails';

function App() {

  /** root routes */
const router = createBrowserRouter([
  {
      path : '/',
      element : <><Header/><MovieList/></>
  },
  {
      path : '/add',
      element : <AddMovieForm></AddMovieForm>
  },
  {
      path : 'movie/:id',
      element : <MovieDetails></MovieDetails>
  },
])

  return (
    <Provider store={store}>
      <div className="App">
    
        <RouterProvider router={router} ></RouterProvider>
        
      </div>
    </Provider>
  );
}

export default App;
