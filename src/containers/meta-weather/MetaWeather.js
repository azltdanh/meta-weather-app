import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLocationForecast } from '../../actions/weather';
import MetaWeatherView from './MetaWeatherView';
import ForecastList from '../../components/ForecastList';

class MetaWeather extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { loading, forecastList } = this.props;

    const viewProps = {
      loading,
      forecastList
    };

    return <MetaWeatherView {...viewProps} />;
  }
}

MetaWeather.propTypes = {
  loading: PropTypes.bool,
  ...ForecastList.propTypes,
  getData: PropTypes.func.isRequired
};

MetaWeather.defaultProps = {
  loading: false
};

const mapStateToProps = ({ weather }) => ({
  loading: weather.loading,
  forecastList: weather.forecastList
});

const mapDispatchToProps = {
  getData: getLocationForecast
};

MetaWeather.displayName = 'MetaWeather';
export { MetaWeather as BaseMetaWeather };
export default connect(mapStateToProps, mapDispatchToProps)(MetaWeather);
