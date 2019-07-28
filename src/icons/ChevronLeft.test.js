import { findByTestAttr, setupTestWrapper, checkProps } from '../utils/testUtils';
import ChevronLeft, { defaultProps } from './ChevronLeft';

describe('<ChevronLeft />', () => {
  test('ChevronLeft icon renders properly', () => {
    const wrapper = setupTestWrapper(ChevronLeft)
    const ChevronLeftIconComponent = findByTestAttr(wrapper, 'ChevronLeft')
    expect(ChevronLeftIconComponent.length).toBe(1)
  })
  test('Check props for ChevronLeft Icon', () => {
    checkProps(ChevronLeft, defaultProps)
  })
})
