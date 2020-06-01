import {
  SEARCH_LOCATION_REQUEST,
  SEARCH_LOCATION_RECEIVED,
  LOCATION_FORECAST_REQUEST,
  LOCATION_FORECAST_RECEIVED
} from '../actions/weather';

export const initialState = {
  loading: false,
  query: undefined, // string
  woeid: undefined, // number
  forecastList: [
    // {
    //   applicableDate: string,
    //   maxTemp: number,
    //   minTemp: number
    // }
  ]
};

export default function weather(state = initialState, action) {
  switch (action.type) {
    case SEARCH_LOCATION_REQUEST:
      return {
        ...state,
        loading: true,
        query: action.query
      };
    case SEARCH_LOCATION_RECEIVED:
      return {
        ...state,
        loading: false,
        woeid: action.woeid
      };
    case LOCATION_FORECAST_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOCATION_FORECAST_RECEIVED:
      return {
        ...state,
        loading: false,
        forecastList: action.forecastList
      };
    default:
      return state;
  }
}
