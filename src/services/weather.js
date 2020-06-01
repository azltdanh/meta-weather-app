import { get } from 'lodash';
import api from '../utilities/api';
import { store } from '../stores';

export const searchLocation = () => {
  const { weather } = store.getState();
  const endpoint = `/location/search/?query=${weather.query}`;
  return api
    .get(endpoint)
    .then((resp) => resp.json())
    .then((data) => {
      const { woeid } = data[0];
      return woeid;
    })
    .catch(() => undefined);
};

export const fetchLocationForecast = () => {
  const { weather } = store.getState();
  const endpoint = `/location/${weather.woeid}/`;
  return api
    .get(endpoint)
    .then((resp) => resp.json())
    .then((data) =>
      get(data, 'consolidated_weather', [])
        .slice(0, 5)
        .map((item) => ({
          applicableDate: item.applicable_date,
          maxTemp: item.max_temp,
          minTemp: item.min_temp
        }))
    )
    .catch(() => []);
};
