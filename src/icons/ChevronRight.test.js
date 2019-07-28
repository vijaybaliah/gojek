import { findByTestAttr, setupTestWrapper, checkProps } from '../utils/testUtils';
import ChevronRight, { defaultProps } from './ChevronRight';

describe('<ChevronRight />', () => {
  test('ChevronRight icon renders properly', () => {
    const wrapper = setupTestWrapper(ChevronRight)
    const ChevronRightIconComponent = findByTestAttr(wrapper, 'ChevronRight')
    expect(ChevronRightIconComponent.length).toBe(1)
  })
  test('Check props for ChevronRight Icon', () => {
    checkProps(ChevronRight, defaultProps)
  })
})
