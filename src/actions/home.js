import { action } from '../utils/helpers'

export const fetchSearch = (payload) => action('FETCH_SEARCH', payload)
export const updateNavigation = (payload) => action('NAVIGATE', payload)
export const updateImageClick = (payload) => action('UPDATE_IMAGE_CLICK', payload)
export const resetIsLoading = (payload) => action('RESET_IS_LOADING', payload)
