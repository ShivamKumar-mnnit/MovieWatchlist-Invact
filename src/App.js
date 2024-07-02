import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import Header from './components/Header';
import './App.css';
import MovieDetails from './components/MovieDetails';
import EditMovieForm from './components/EditMovieForm';
import WatchedPage from './components/WatchedPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/watched" element={<WatchedPage />} />
            <Route path="/add" element={<AddMovieForm />} />
            <Route path="/edit/:id" element={<EditMovieForm />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
