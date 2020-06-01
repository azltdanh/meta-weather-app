import React, { Component } from 'react';
import { connect } from 'react-redux';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'whatwg-fetch';

configure({ adapter: new Adapter() });

global.React = React;
global.Component = Component;
global.connect = connect;
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.cancelAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;
global.sessionStorage = localStorageMock;
