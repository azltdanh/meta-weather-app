import { merge } from 'lodash';
import configureMockStore from 'redux-mock-store';
import { initialState as weatherInitialState } from '../../src/reducers/weather';

const initialState = {
  weather: weatherInitialState
};

export const getMockStore = (state, middleware = []) => {
  const mockStore = configureMockStore(middleware);
  const finalState = merge({}, initialState, state);
  return mockStore(finalState);
};
