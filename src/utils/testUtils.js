import { shallow } from "enzyme";
import React from 'react';
import checkPropTypes from 'check-prop-types';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import { middlewares as globalMiddlewares } from '../middlewares';

export const storeFactory = (initialState) => {
  const rootReducer = combineReducers({ ...reducers })
  const middlewares = [
    thunk,
    ...globalMiddlewares
  ]
  const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddlewares(rootReducer, initialState)
}

export const findByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test="${attr}"]`);
}

export const setupTestWrapper = (Component, props={}) => {
  return shallow(<Component {...props} />)
}

export const checkProps = (Component, confirmingProps) => {
  const propsError = checkPropTypes(
    Component.propTypes,
    confirmingProps,
    'props',
    Component.name
  )
  expect(propsError).toBeUndefined()
}