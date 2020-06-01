import { Form } from 'react-bootstrap';
import mockWeatherState from '../../../config/mocks/weather';
import SearchView from './SearchView';

describe('SearchView', () => {
  it('render', () => {
    const viewProps = {
      query: mockWeatherState.query,
      onSubmit: jest.fn(),
      onInputChange: jest.fn()
    };

    const wrapper = shallow(<SearchView {...viewProps} />);

    const form = wrapper.find(Form);
    expect(form.length).toEqual(1);
    expect(form.props().onSubmit).toEqual(viewProps.onSubmit);

    const input = form.find(Form.Control);
    expect(input.props().value).toEqual(viewProps.query);
    expect(input.props().onChange).toEqual(viewProps.onInputChange);
  });
});
