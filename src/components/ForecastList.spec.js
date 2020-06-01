import mockWeatherState from '../../config/mocks/weather';
import ForecastList from './ForecastList';

describe('ForecastList', () => {
  it('render', () => {
    const viewProps = {
      forecastList: mockWeatherState.forecastList
    };
    const wrapper = shallow(<ForecastList {...viewProps} />);
    const cardGroup = wrapper.find('CardGroup');
    expect(cardGroup.length).toEqual(1);
    expect(cardGroup.find('ForecastItem').length).toEqual(viewProps.forecastList.length);
  });
});
