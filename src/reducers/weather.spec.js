import mockWeatherState from '../../config/mocks/weather';
import {
  SEARCH_LOCATION_REQUEST,
  SEARCH_LOCATION_RECEIVED,
  LOCATION_FORECAST_REQUEST,
  LOCATION_FORECAST_RECEIVED
} from '../actions/weather';

import weather from './weather';

describe('weather', () => {
  it('should return the initial state', () => {
    expect(weather({}, {})).toEqual({});
  });
  it(`should handle ${SEARCH_LOCATION_REQUEST} action`, () => {
    expect(weather({}, { type: SEARCH_LOCATION_REQUEST, query: mockWeatherState.query })).toEqual({
      loading: true,
      query: mockWeatherState.query
    });
  });
  it(`should handle ${SEARCH_LOCATION_RECEIVED} action`, () => {
    expect(weather({}, { type: SEARCH_LOCATION_RECEIVED, woeid: mockWeatherState.woeid })).toEqual({
      loading: false,
      woeid: mockWeatherState.woeid
    });
  });
  it(`should handle ${LOCATION_FORECAST_REQUEST} action`, () => {
    expect(weather({}, { type: LOCATION_FORECAST_REQUEST })).toEqual({ loading: true });
  });
  it(`should handle ${LOCATION_FORECAST_RECEIVED} action`, () => {
    expect(weather({}, { type: LOCATION_FORECAST_RECEIVED, forecastList: mockWeatherState.forecastList })).toEqual({
      loading: false,
      forecastList: mockWeatherState.forecastList
    });
  });
});
