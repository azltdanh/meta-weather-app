import mockWeatherState from '../../../config/mocks/weather';
import MetaWeatherView from './MetaWeatherView';

describe('MetaWeatherView', () => {
  it('render', () => {
    const viewProps = {
      loading: mockWeatherState.loading,
      forecastList: mockWeatherState.forecastList
    };
    const wrapper = shallow(<MetaWeatherView {...viewProps} />);
    expect(wrapper.find('Jumbotron').hasClass('text-center')).toEqual(true);
    expect(wrapper.find('Spinner').length).toEqual(0);
    expect(wrapper.find('ForecastList').length).toEqual(1);
  });
  it('render loading', () => {
    const viewProps = {
      loading: true
    };
    const wrapper = shallow(<MetaWeatherView {...viewProps} />);
    expect(wrapper.find('Jumbotron').hasClass('text-center')).toEqual(true);
    expect(wrapper.find('Spinner').length).toEqual(1);
    expect(wrapper.find('ForecastList').length).toEqual(0);
  });
});
