import mockWeatherState from '../../config/mocks/weather';
import api from '../utilities/api';
import * as weatherService from './weather';

const { query, woeid } = mockWeatherState;
const forecastItem = mockWeatherState.forecastList[0];
const mockForecastResponse = {
  consolidated_weather: [
    {
      applicable_date: forecastItem.applicableDate,
      max_temp: forecastItem.maxTemp,
      min_temp: forecastItem.minTemp
    }
  ]
};

describe('weatherService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('searchLocation resolve', () => {
    const apiSpy = jest
      .spyOn(api, 'get')
      .mockImplementation(() => Promise.resolve({ json: () => [{ woeid: mockWeatherState.woeid }] }));
    return weatherService.searchLocation(query).then((data) => {
      expect(apiSpy).toHaveBeenCalled();
      expect(data).toEqual(mockWeatherState.woeid);
    });
  });
  it('searchLocation reject', () => {
    const apiSpy = jest.spyOn(api, 'get').mockImplementation(() => Promise.reject());
    return weatherService.searchLocation(query).then((data) => {
      expect(apiSpy).toHaveBeenCalled();
      expect(data).toEqual(undefined);
    });
  });
  it('fetchLocationForecast resolve', () => {
    const apiSpy = jest
      .spyOn(api, 'get')
      .mockImplementation(() => Promise.resolve({ json: () => mockForecastResponse }));
    return weatherService.fetchLocationForecast(woeid).then((data) => {
      expect(apiSpy).toHaveBeenCalled();
      expect(data).toEqual(mockWeatherState.forecastList);
    });
  });
  it('fetchLocationForecast reject', () => {
    const apiSpy = jest.spyOn(api, 'get').mockImplementation(() => Promise.reject());
    return weatherService.fetchLocationForecast(woeid).then((data) => {
      expect(apiSpy).toHaveBeenCalled();
      expect(data).toEqual([]);
    });
  });
});
