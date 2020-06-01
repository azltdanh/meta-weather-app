import appFetch, { baseEndpoint, getEndpointUrl, getFetchOptions } from './api';

const url = 'https://samples/';

describe('api', () => {
  it('getEndpointUrl', () => {
    expect(getEndpointUrl('sample')).toEqual(`${baseEndpoint}/sample`);
    expect(getEndpointUrl(url)).toEqual(url);
  });

  describe('getFetchOptions', () => {
    const defaultFetchOptions = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    it('Should get GET fetch options correctly', () => {
      expect(getFetchOptions('GET')).toEqual(defaultFetchOptions);
    });

    it('Should get POST fetch options correctly', () => {
      const expectedPostOptions = {
        ...defaultFetchOptions,
        method: 'POST',
        body: JSON.stringify({
          username: 'post',
          password: 'post'
        })
      };

      expect(
        getFetchOptions('POST', {
          username: 'post',
          password: 'post'
        })
      ).toEqual(expectedPostOptions);
    });

    it('Should get PUT fetch options correctly', () => {
      const expectedPutOptions = {
        ...defaultFetchOptions,
        method: 'PUT',
        body: JSON.stringify({
          username: 'put',
          password: 'put'
        }),
        options: 'options'
      };

      expect(
        getFetchOptions(
          'PUT',
          {
            username: 'put',
            password: 'put'
          },
          { options: 'options' }
        )
      ).toEqual(expectedPutOptions);
    });
  });

  describe('apiService', () => {
    it('should GET successfully', async () => {
      global.fetch = jest
        .fn()
        .mockImplementation(() => Promise.resolve({ json: () => ({ message: 'GET' }) }));
      const response = await appFetch.get('sample');
      expect(response.json().message).toEqual('GET');
    });

    it('should POST successfully', async () => {
      global.fetch = jest
        .fn()
        .mockImplementation(() => Promise.resolve({ json: () => ({ message: 'POST' }) }));
      const response = await appFetch.post('sample');
      expect(response.json().message).toEqual('POST');
    });

    it('should PUT successfully', async () => {
      global.fetch = jest
        .fn()
        .mockImplementation(() => Promise.resolve({ json: () => ({ message: 'PUT' }) }));
      const response = await appFetch.put('sample');
      expect(response.json().message).toEqual('PUT');
    });
  });
});
