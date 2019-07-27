import React from 'react';
import SearchForm, { SearchForm as UnconnectedSearchForm } from './SearchForm';
import renderer from 'react-test-renderer';
import { mount, render, shallow, configure } from "enzyme";
// import Adapter from 'enzyme-adapter-react-16';
import { storeFactory, findByTestAttr } from '../../utils/testUtils'
// configure({ adapter: new Adapter() });


const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  return shallow(<SearchForm store={store} />).dive().dive().dive().dive()
}



describe("<SearchForm />", () => {
  test("<SearchForm /> should render without throwing an error", () => {
    const wrapper = setup()
    const searchFormComponent = findByTestAttr(wrapper, 'SearchForm')
    expect(searchFormComponent.length).toBe(1)
  });

  test("submit search form on button click", () => {
    const handleSubmitMock = jest.fn()
    const wrapper = shallow(
      <UnconnectedSearchForm
        handleSubmit={handleSubmitMock}
      />
    )
    const submitButton = findByTestAttr(wrapper, 'searchSubmitBtn')
    submitButton.simulate('click')
    const handleSubmitCallCount = handleSubmitMock.mock.calls.length
    expect(handleSubmitCallCount).toBe(1)
  });
});