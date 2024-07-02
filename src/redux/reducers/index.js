// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import movieReducer from './movieReducer'; // We'll define this next

const rootReducer = combineReducers({
  movies: movieReducer, // You can add more reducers here
});

export default rootReducer;
