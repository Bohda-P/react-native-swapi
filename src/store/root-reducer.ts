import { combineReducers } from '@reduxjs/toolkit';
// Reducers
import { peopleReducer } from './people/slice';

export const rootReducer = combineReducers({
  people: peopleReducer,
});
