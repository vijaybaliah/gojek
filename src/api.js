import axios from 'axios'
import { API_KEY } from './utils/contants'

export const fetch = (url, method = 'get', payload = {}) => {
    const { data = {}, ...rest } = payload
    try {
        var requestObject = {
            method: method,
            baseURL: 'https://api.giphy.com/v1',
            headers: {
                'Content-Type': 'application/json',
                ...rest
            },
            params: {
                api_key: API_KEY
            },
            validateStatus: (status) => {
                return status >= 200 && status < 400; // default
            },
            responseType: 'json',
            url
        }

        if (Object.keys(data).length) {
            requestObject.data = data
        }

    } catch(e) {
        console.log('fetch error: ', e)
    }

    return axios(requestObject)
}
