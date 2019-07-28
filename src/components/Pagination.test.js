import Pagination from './Pagination'
import { setupTestWrapper, findByTestAttr } from '../utils/testUtils'

describe('<Pagination/>', () => {
  let props
  let mockFunction
  beforeEach(() => {
    mockFunction = jest.fn()
    props = {
      totalSize: 10,
      onChange: mockFunction,
    };
  })
  test('1 is displayed as value in select Page dropdown', () => {
    const wrapper = setupTestWrapper(Pagination, props)
    const selectedPage = findByTestAttr(wrapper, 'Pagination')
    expect(selectedPage.length).toBe(1);
  });

  test('Onchange handler is called when page right is clicked', () => {
    const wrapper = setupTestWrapper(Pagination, {...props, currentPage: 2})
    const leftArrow = findByTestAttr(wrapper, 'leftArrow')
    leftArrow.simulate('click')
    const leftArrowClickCount = mockFunction.mock.calls.length
    expect(leftArrowClickCount).toBe(1)
  })

  test('Onchange handler is `not` called when page left is clicked', () => {
    const wrapper = setupTestWrapper(Pagination, props)
    const leftArrow = findByTestAttr(wrapper, 'leftArrow')
    leftArrow.simulate('click')
    const leftArrowClickCount = mockFunction.mock.calls.length
    expect(leftArrowClickCount).toBe(0)
  });

});