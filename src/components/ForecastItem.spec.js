import { Card } from 'react-bootstrap';
import mockWeatherState from '../../config/mocks/weather';
import ForecastItem from './ForecastItem';

describe('ForecastItem', () => {
  it('render', () => {
    const viewProps = mockWeatherState.forecastList[0];

    const wrapper = shallow(<ForecastItem {...viewProps} />);

    const card = wrapper.find(Card);
    expect(card.length).toEqual(1);

    const title = wrapper.find(Card.Title);
    expect(title.hasClass('text-truncate'));
    expect(title.contains(viewProps.applicableDate));

    const texts = wrapper.find(Card.Text);
    expect(texts.at(0).contains(`${viewProps.minTemp}°C`));
    expect(texts.at(1).contains(`${viewProps.maxTemp}°C`));
  });
});
