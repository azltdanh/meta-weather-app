import 'whatwg-fetch';
import { merge } from 'lodash';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
export const baseEndpoint = `${proxyUrl}https://www.metaweather.com/api`;

export const getEndpointUrl = (url) => {
  if (url.match(/^(http|https):\/\//)) {
    return url;
  }
  return `${baseEndpoint}/${url.replace(/^\/+/, '')}`; // Using direct url or from base url
};

export const getFetchOptions = (method, body, options = {}) =>
  merge(
    {
      method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    },
    body && {
      body: JSON.stringify(body)
    },
    options
  );

const apiService = {
  get: (url, options) => fetch(getEndpointUrl(url), getFetchOptions('GET', null, options)),
  post: (url, body, options) => fetch(getEndpointUrl(url), getFetchOptions('POST', body, options)),
  put: (url, body, options) => fetch(getEndpointUrl(url), getFetchOptions('PUT', body, options))
};

export default apiService;
