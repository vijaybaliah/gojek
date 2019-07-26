const home = ( state = {
    isLoading: true,
    isFetching: false,
    error: null,
    data: []
}, { type, payload = {} }) => {
    switch (type) {
        case 'FETCH_SEARCH':
            return {
                ...state,
                isLoading: true,
                isFetching: true,
                error: null
            }
        case 'FETCH_SEARCH_SUCCESS':
        case 'FETCH_SEARCH_ERROR':
            return {
                ...state,
                ...payload
            }
        default: 
            return state
    }
}
export default { home }
