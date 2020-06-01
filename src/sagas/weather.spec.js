import { all, call, put, takeLatest } from 'redux-saga/effects';
import { searchLocation, fetchLocationForecast } from '../services/weather';
import weatherSagas, { searchLocationSaga, fetchLocationForecastSaga } from './weather';
import {
  SEARCH_LOCATION_REQUEST,
  SEARCH_LOCATION_RECEIVED,
  LOCATION_FORECAST_REQUEST,
  LOCATION_FORECAST_RECEIVED
} from '../actions/weather';

describe('searchLocationSaga', () => {
  it(`should dispatch action ${SEARCH_LOCATION_RECEIVED} with result`, () => {
    const generator = searchLocationSaga();
    expect(generator.next().value).toEqual(call(searchLocation));
    expect(generator.next().value).toEqual(put({ type: SEARCH_LOCATION_RECEIVED, woeid: undefined }));
    expect(generator.next().value).toEqual(put({ type: LOCATION_FORECAST_REQUEST }));
    expect(generator.next().done).toBeTruthy();
  });
});
describe('fetchLocationForecastSaga', () => {
  it(`should dispatch action ${LOCATION_FORECAST_RECEIVED} with result`, async () => {
    const generator = fetchLocationForecastSaga();
    expect(generator.next().value).toEqual(call(fetchLocationForecast));
    expect(generator.next().value).toEqual(put({ type: LOCATION_FORECAST_RECEIVED, woeid: undefined }));
    expect(generator.next().done).toBeTruthy();
  });
});
describe('weatherSagas', () => {
  const generator = weatherSagas();
  it(`should listen to ${SEARCH_LOCATION_REQUEST} and ${LOCATION_FORECAST_REQUEST} to fetch data`, () => {
    expect(generator.next().value).toEqual(
      all([
        takeLatest(SEARCH_LOCATION_REQUEST, searchLocationSaga),
        takeLatest(LOCATION_FORECAST_REQUEST, fetchLocationForecastSaga)
      ])
    );
    expect(generator.next().done).toBeTruthy();
  });
});
