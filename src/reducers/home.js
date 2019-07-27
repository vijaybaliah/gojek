const home = ( state = {
    isLoading: true,
    isFetching: false,
    list: {},
    queryString: ''
}, { type, payload = {} }) => {
    switch (type) {
        case 'FETCH_SEARCH': {
            const { queryString } = payload
            return {
                ...state,
                isLoading: true,
                isFetching: true,
                list: {
                    ...state.list,
                    [queryString]: {
                        ...state.list[queryString],
                        error: null
                    }
                },
                queryString
            }
        }
        case 'FETCH_SEARCH_SUCCESS':
        case 'FETCH_SEARCH_ERROR': {
            const { queryString, ...rest } = payload
            return {
                ...state,
                isLoading: false,
                isFetching: false,
                list: {
                    ...state.list,
                    [queryString]: {
                        ...state.list[queryString],
                        ...rest
                    }
                }
            }
        }
        default: 
            return state
    }
}
export default { home }
