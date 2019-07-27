import { fetchSearch } from './home'

describe('Test action creators', () => {
  test('returns "FETCH_SEARCH" action type', () => {
    const payload = {q: 'cat'}
    const fetchSearchAction = fetchSearch(payload)
    expect(fetchSearchAction).toEqual({
      type: fetchSearchAction.type,
      payload: payload
    })
  })
})
