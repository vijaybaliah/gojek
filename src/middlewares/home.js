import { fetch } from '../api'
// import { isEmpty } from 'lodash'

export const home = store => next => action => {
    const result = next(action)
    const { type, payload } = action

    switch( type ) {
        case 'FETCH_SEARCH': {
            // TODO: duplicate user error
            const { queryString } = payload
            const { data = [] } = store.getState().home.list[queryString]
            if (data.length > 0) {
                store.dispatch({ type: type + '_SUCCESS', payload: { queryString }})
            } else {
                const url = '/gifs/search?' + queryString
                return fetch(url)
                .then((res) => {
                    store.dispatch({ type: type + '_SUCCESS', payload: { queryString, ...res.data }})
                }, error => {
                    store.dispatch({ type: type + '_ERROR', payload: { queryString, error: error.toString() } })
                })
                .catch((error) => {
                    store.dispatch({ type: type + '_ERROR', payload: { queryString, error } })
                })
            }
        }
        break
        default:
           return result; 
    }
}
