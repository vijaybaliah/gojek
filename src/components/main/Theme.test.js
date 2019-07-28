import Theme from './Theme';
import tokens from '../../utils/tokens';
import { setupTestWrapper, findByTestAttr } from '../../utils/testUtils';

describe('<Themes />', () => {
  let setup
  beforeEach(() => {
    setup = (props={tokens}) => setupTestWrapper(Theme, props)
  })
  test('Renders with out error', () => {
    const wrapper = setup()
    const ThemeComponent = findByTestAttr(wrapper, 'Theme')
    expect(ThemeComponent.length).toBe(1)
  })
  test('Theme props verification', () => {
    const wrapper = setup()
    const ThemeOptions = findByTestAttr(wrapper, 'themeOptions')
    expect(ThemeOptions.length).toBe(Object.keys(tokens).length)
  })
  test('Simulate theme click simulation', () => {
    const mockOnThemeChange = jest.fn()
    const props = {
      tokens,
      onThemeChange: mockOnThemeChange,
    }
    const wrapper = setup(props)
    const ThemeOptions = findByTestAttr(wrapper, 'Theme')
    ThemeOptions.find('div').at(1).simulate('click')
    const mockOnThemeChangeCallCount = mockOnThemeChange.mock.calls.length
    expect(mockOnThemeChangeCallCount).toBe(1)
  })
})