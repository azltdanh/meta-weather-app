import * as format from './format';

describe('format utilities', () => {
  it('formatDate', () => {
    expect(format.formatDate('2020-05-30')).toEqual('Saturday');
    expect(format.formatDate('invalid')).toEqual('invalid');
  });
  it('formatTemp', () => {
    expect(format.formatTemp(30.21)).toEqual('30°C');
    expect(format.formatTemp('invalid')).toEqual('invalid');
  });
});
