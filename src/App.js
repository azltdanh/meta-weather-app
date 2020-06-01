import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import { store } from './stores';
import Search from './containers/search/Search';
import MetaWeather from './containers/meta-weather/MetaWeather';

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <Container>
        <h1>Weather Forecast</h1>
        <Search />
        <MetaWeather />
      </Container>
    </Provider>
  </React.StrictMode>
);

export default App;
