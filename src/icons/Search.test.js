import { findByTestAttr, setupTestWrapper, checkProps } from '../utils/testUtils';
import Search, { defaultProps } from './Search';

describe('<Search />', () => {
  test('Search icon renders properly', () => {
    const wrapper = setupTestWrapper(Search)
    const SearchIconComponent = findByTestAttr(wrapper, 'Search')
    expect(SearchIconComponent.length).toBe(1)
  })
  test('Check props for Search Icon', () => {
    checkProps(Search, defaultProps)
  })
})