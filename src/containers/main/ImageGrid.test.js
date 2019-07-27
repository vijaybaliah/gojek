import React from 'react';
import { shallow } from 'enzyme';
import ImageGrid from './ImageGrid';
import { storeFactory, findByTestAttr } from '../../utils/testUtils';
import { NO_RESULTS_FOUND } from '../../utils/contants';

describe('<ImageGrid /> ', () => {
  let setup
  beforeEach(() => {
    setup = (initialState = {}) => {
      const store = storeFactory(initialState)
      return shallow(<ImageGrid store={store} />).dive()
    }
  })


  test('renders Image Grid', () => {
    const wrapper = setup()
    const ImageGridComponent = findByTestAttr(wrapper, 'ImageGrid')
    expect(ImageGridComponent.length).toBe(1)
  })
  test('No search results', () => {
    const queryString = 'q=cat'
    const initialState = {
      home: {
        isLoading: false,
        list: {
          [queryString]: {
            data: [],
            error: null
          }
        },
        queryString
      }
    }
    const wrapper = setup(initialState)
    const NoResultsComponent = findByTestAttr(wrapper, 'noresults')
    expect(NoResultsComponent.text()).toBe(NO_RESULTS_FOUND)
  })
  test('If fetching search results', () => {
    const queryString = 'q=cat'
    const initialState = {
      home: {
        isLoading: true,
        isFetching: true,
        list: {
          [queryString]: {
            data: [],
            error: null
          }
        },
        queryString
      }
    }
    const wrapper = setup(initialState)
    const LoaderComponent = findByTestAttr(wrapper, 'loader')
    expect(LoaderComponent.length).toBe(1)
  })
  test('For a given number of search results', () => {
    const queryString = 'q=cat'
    const initialState = {
      home: {
        isLoading: false,
        isFetching: false,
        list: {
          [queryString]: {
            data: [{
              id: '1',
              images: {
                fixed_height_still: {
                  url: 'https://media2.giphy.com/media/CjmvTCZf2U3p09Cn0h/200_s.gif?cid=24ff01b35d3caa7e2e7071714d002705&rid=200_s.gif'
                }
              }
            }],
            error: null
          }
        },
        queryString
      }
    }
    const wrapper = setup(initialState)
    const ImagesComponent = findByTestAttr(wrapper, 'imageList')
    expect(ImagesComponent.length).toBe(1)
  })
  test('Api error message', () => {
    const queryString = 'q=cat'
    const initialState = {
      home: {
        isLoading: false,
        isFetching: false,
        list: {
          [queryString]: {
            data: [],
            error: 'Not Found'
          }
        },
        queryString
      }
    }
    const wrapper = setup(initialState)
    const ErrorComponent = findByTestAttr(wrapper, 'errorMessage')
    expect(ErrorComponent.length).toBe(1)
  })
})
