import { combineReducers } from 'redux';
import weather from './weather';

export default function createReducer(injectedReducers) {
  return combineReducers({
    weather,
    ...injectedReducers
  });
}
