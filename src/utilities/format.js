import moment from 'moment';

export const formatDate = (date) => {
  const d = moment(new Date(date));
  if (!d.isValid()) {
    return date;
  }
  return d.format('dddd');
};

export const formatTemp = (temp) => {
  if (isNaN(temp)) {
    return temp;
  }
  return `${temp.toFixed(0)}°C`;
};
