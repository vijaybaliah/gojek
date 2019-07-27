import Images from './Images';
import { findByTestAttr, setupTestWrapper } from '../../utils/testUtils'

describe('<Images />', () => {
  let setup
  beforeEach(() => {
    setup = (props = {}) => setupTestWrapper(Images, props)
  })
  test('Render without error', () => {
    const wrapper = setup()
    const ImagesComponent = findByTestAttr(wrapper, 'Images')
    expect(ImagesComponent.length).toBe(1)
  })
  test('Renders Image Not Found when isSelected="false"', () => {
    const props = {
      isSelected: false,
      imageData: {
        fixed_height: {},
        fixed_height_still: {
          url: ''
        }
      }
    }
    const wrapper = setup(props)
    const ImageNotFound = findByTestAttr(wrapper, 'imageNotFound')
    expect(ImageNotFound.length).toBe(1)
  })
  test('Renders Image Not Found when isSelected="true"', () => {
    const props = {
      isSelected: true,
      imageData: {
        fixed_height_still: {},
        fixed_height: {
          url: ''
        }
      }
    }
    const wrapper = setup(props)
    const ImageNotFound = findByTestAttr(wrapper, 'imageNotFound')
    expect(ImageNotFound.length).toBe(1)
  })
  test('Renders Image for isSelected="true"', () => {
    const props = {
      isSelected: true,
      imageData: {
        fixed_height_still: {},
        fixed_height: {
          url: 'https://media2.giphy.com/media/CjmvTCZf2U3p09Cn0h/200.gif?cid=24ff01b35d3caa7e2e7071714d002705&rid=200.gif'
        }
      }
    }
    const wrapper = setup(props)
    const imageSelected = findByTestAttr(wrapper, 'imageSelected')
    expect(imageSelected.length).toBe(1)
  })
  test('Simulate imageOnClick to be called with the passed props', () => {
    const imageOnClick = jest.fn()
    const id = 'testid1'
    const props = {
      id,
      isSelected: true,
      handleImageClick: imageOnClick,
      imageData: {
        fixed_height: {
          url: 'https://media2.giphy.com/media/CjmvTCZf2U3p09Cn0h/200.gif?cid=24ff01b35d3caa7e2e7071714d002705&rid=200.gif'
        }
      }
    }
    const wrapper = setup(props)
    const ImagesComponent = findByTestAttr(wrapper, 'Images')
    ImagesComponent.simulate('click')
    const imageOnClickCallArgs = imageOnClick.mock.calls[0][0]
    expect(imageOnClickCallArgs).toEqual(id)
  })
})