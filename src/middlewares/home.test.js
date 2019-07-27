import moxios from 'moxios';
import axios from 'axios';
import { storeFactory } from '../utils/testUtils';
import { fetchSearch } from '../actions/home';
import qstring from 'query-string';

describe('integration test for "FETCH_SEARCH" action', () => {
  let axiosInstance
  beforeEach(() => {
    axiosInstance = axios.create();
    moxios.install(axiosInstance)
  })
  afterEach(() => {
    moxios.uninstall(axiosInstance)
  })

  test('add response to state', () => {
    const store = storeFactory()
    const query = {
      limit: 25,
      offset: 0,
      rating: 'G',
      lang: 'en',
      q: ''
    }
    const queryString = qstring.stringify(query)
    const response = {
      "data": [],
      "pagination": {
        "total_count": 0,
        "count": 0,
        "offset": 0
      },
      "meta": {
        "status": 200,
        "msg": "OK",
        "response_id": "5d3c724a5947426536aa3374"
      }
    }
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(response)
    })

    return store.dispatch(fetchSearch({queryString}))
    .then(() => {
      const newState = store.getState()
      expect(newState.home.queryString).toBe(queryString)
    })
  })
})