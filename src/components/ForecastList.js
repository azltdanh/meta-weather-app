import React from 'react';
import PropTypes from 'prop-types';
import { CardGroup } from 'react-bootstrap';
import ForecastItem from './ForecastItem';

const ForecastList = ({ forecastList }) => (
  <CardGroup>
    {forecastList.map((item) => (
      <ForecastItem key={item.applicableDate} {...item} />
    ))}
  </CardGroup>
);

ForecastList.propTypes = {
  forecastList: PropTypes.arrayOf(PropTypes.shape(ForecastItem.propTypes))
};
ForecastList.defaultProps = {
  forecastList: []
};
ForecastList.displayName = 'ForecastList';
export default ForecastList;
