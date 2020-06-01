import App from './App';
import Search from './containers/search/Search';
import MetaWeather from './containers/meta-weather/MetaWeather';

describe('App', () => {
  it('render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').contains('Weather Forecast')).toEqual(true);
    expect(wrapper.find(Search).length).toEqual(1);
    expect(wrapper.find(MetaWeather).length).toEqual(1);
  });
});
