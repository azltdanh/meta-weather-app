import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { formatDate, formatTemp } from '../utilities/format';

const ForecastItem = ({ applicableDate, minTemp, maxTemp }) => (
  <Card>
    <Card.Body>
      <Card.Title className="text-truncate">{formatDate(applicableDate)}</Card.Title>
      <Card.Text as="div">{`Min: ${formatTemp(minTemp)}`}</Card.Text>
      <Card.Text as="div">{`Max: ${formatTemp(maxTemp)}`}</Card.Text>
    </Card.Body>
  </Card>
);

ForecastItem.propTypes = {
  applicableDate: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired
};

ForecastItem.displayName = 'ForecastItem';
export default ForecastItem;
