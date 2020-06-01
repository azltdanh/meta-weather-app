import mockWeatherState from '../../../config/mocks/weather';
import { getMockStore } from '../../../config/mocks/store';
import { BaseSearch } from './Search';

const store = getMockStore();
const setupComponent = (props) => {
  const defaultProps = {
    query: mockWeatherState.query,
    search: jest.fn()
  };
  const wrapper = mount(<BaseSearch {...defaultProps} {...props} store={store} />, {
    context: { store }
  });
  const instance = wrapper.instance();
  const view = wrapper.find('SearchView');
  return { wrapper, instance, view };
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Search', () => {
  it('render', () => {
    const { wrapper, view } = setupComponent();
    expect(view.length).toEqual(1);
    expect(wrapper.props().query).toBeDefined();
    expect(wrapper.props().search).toBeDefined();
  });
  it('handleInputChange', () => {
    const { instance } = setupComponent();
    const setStateSpy = jest.spyOn(instance, 'setState');
    const event = { target: { value: 'value' } };
    instance.onInputChange(event);
    expect(setStateSpy).toHaveBeenCalledWith({ query: event.target.value });
  });
  it('onSubmit', () => {
    const { wrapper, instance } = setupComponent();
    const preventDefault = jest.fn();
    const event = { preventDefault };
    instance.onSubmit(event);
    expect(preventDefault).toHaveBeenCalled();
    expect(wrapper.props().search).toHaveBeenCalledWith(instance.state.query);
  });
  it('onSubmit should not call search with empty query', () => {
    const { wrapper, instance } = setupComponent();
    const preventDefault = jest.fn();
    const event = { preventDefault };
    instance.setState({ query: '' });
    instance.onSubmit(event);
    expect(preventDefault).toHaveBeenCalled();
    expect(wrapper.props().search).not.toHaveBeenCalled();
  });
});
