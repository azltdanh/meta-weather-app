import { searchLocation, getLocationForecast, SEARCH_LOCATION_REQUEST, LOCATION_FORECAST_REQUEST } from './weather';

describe('weatherActions', () => {
  it('searchLocation', () => {
    const expectedAction = {
      type: SEARCH_LOCATION_REQUEST,
      query: 'name'
    };
    expect(searchLocation('name')).toEqual(expectedAction);
  });
  it('getLocationForecast', () => {
    const expectedAction = {
      type: LOCATION_FORECAST_REQUEST
    };
    expect(getLocationForecast('name')).toEqual(expectedAction);
  });
});
