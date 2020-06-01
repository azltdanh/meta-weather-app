import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Spinner } from 'react-bootstrap';
import ForecastList from '../../components/ForecastList';

const MetaWeatherView = ({ loading, forecastList }) => (
  <Jumbotron className="text-center">
    {loading && (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )}
    {!loading && forecastList && <ForecastList forecastList={forecastList} />}
  </Jumbotron>
);

MetaWeatherView.propTypes = {
  loading: PropTypes.bool,
  ...ForecastList.propTypes
};

MetaWeatherView.defaultProps = {
  loading: false
};

MetaWeatherView.displayName = 'MetaWeatherView';
export default MetaWeatherView;
