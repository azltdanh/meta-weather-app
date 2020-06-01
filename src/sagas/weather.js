import { all, call, put, takeLatest } from 'redux-saga/effects';
import { searchLocation, fetchLocationForecast } from '../services/weather';
import {
  SEARCH_LOCATION_REQUEST,
  SEARCH_LOCATION_RECEIVED,
  LOCATION_FORECAST_REQUEST,
  LOCATION_FORECAST_RECEIVED
} from '../actions/weather';

export function* searchLocationSaga() {
  const data = yield call(searchLocation);
  yield put({ type: SEARCH_LOCATION_RECEIVED, woeid: data });
  yield put({ type: LOCATION_FORECAST_REQUEST });
}

export function* fetchLocationForecastSaga() {
  const data = yield call(fetchLocationForecast);
  yield put({ type: LOCATION_FORECAST_RECEIVED, forecastList: data });
}

export default function* root() {
  yield all([
    takeLatest(SEARCH_LOCATION_REQUEST, searchLocationSaga),
    takeLatest(LOCATION_FORECAST_REQUEST, fetchLocationForecastSaga)
  ]);
}
