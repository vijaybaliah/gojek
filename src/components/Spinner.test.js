import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';
import { findByTestAttr, setupTestWrapper } from '../utils/testUtils'

describe('<Spinner />', () => {
  test('Renders correctly', () => {
    const wrapper = setupTestWrapper(Spinner);
    expect(wrapper).toMatchSnapshot();
  });

  test('Test different props', () => {
    const wrapper = setupTestWrapper(Spinner, {size: '40px'});
    const Loader = findByTestAttr(wrapper, 'loader')
    expect(Loader.props().style).toMatchObject({ height: '40px', width: '40px' });
  });
});
