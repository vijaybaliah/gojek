import React from 'react';
import { shallow } from "enzyme";
import { setupTestWrapper, findByTestAttr } from '../../utils/testUtils';
import { FormInput, FieldError } from './FormElements';

test('<FieldError /> renders without error when meta props is touched', () => {
  const props = {
    meta: {
      touched: true,
      error: 'has error'
    }
  }
  const wrapper = setupTestWrapper(FieldError, props);
  const FormInputWrapper = findByTestAttr(wrapper, "FieldErrorComponent")
  expect(FormInputWrapper.text()).toBe('has error')
})

test('<FieldError /> renders without error when meta props is not touched', () => {
  const props = {
    meta: {
      touched: false,
      error: 'has error'
    }
  }
  const wrapper = setupTestWrapper(FieldError, props);
  const FormInputWrapper = findByTestAttr(wrapper, "FieldErrorComponent")
  expect(FormInputWrapper.length).toBe(0)
})

test('<FormInput /> renders without error', () => {
  const wrapper = setupTestWrapper(FormInput, {meta: {}});
  const FormInputWrapper = findByTestAttr(wrapper, "FormInputComponent")
  expect(FormInputWrapper.length).toBe(1)
})
