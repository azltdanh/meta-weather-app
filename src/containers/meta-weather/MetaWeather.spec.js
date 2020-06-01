import mockWeatherState from '../../../config/mocks/weather';
import { getMockStore } from '../../../config/mocks/store';
import { BaseMetaWeather } from './MetaWeather';

const store = getMockStore();
const setupComponent = (props) => {
  const defaultProps = {
    loading: mockWeatherState.loading,
    forecastList: mockWeatherState.forecastList,
    getData: jest.fn()
  };
  const wrapper = mount(<BaseMetaWeather {...defaultProps} {...props} store={store} />, {
    context: { store }
  });
  const instance = wrapper.find('MetaWeather').instance();
  const view = wrapper.find('MetaWeatherView');
  return { wrapper, instance, view };
};

describe('MetaWeather', () => {
  it('render', () => {
    const { wrapper, view } = setupComponent();
    expect(view.length).toEqual(1);
    expect(wrapper.props().loading).toBeDefined();
    expect(wrapper.props().forecastList).toBeDefined();
    expect(wrapper.props().getData).toBeDefined();
  });
  it('componentDidMount', () => {
    const { wrapper, instance } = setupComponent();
    instance.componentDidMount();
    expect(wrapper.props().getData).toHaveBeenCalled();
  });
});
