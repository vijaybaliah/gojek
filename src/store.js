import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import { connectRouter, routerMiddleware } from 'connected-react-router'
import { connectRoutes } from 'redux-first-router'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history';
import reducers from './reducers'
import { middlewares as globalMiddlewares } from './middlewares'
import routesMap from './routes'
import queryString from 'query-string'

export const history = createBrowserHistory()

export const { reducer, middleware, enhancer } = connectRoutes(history, routesMap, {
  location: 'router',
  querySerializer: queryString
})

const initialState = {}
const enhancers = [
  enhancer
]

export const middlewares = [
  thunk,
  ...globalMiddlewares,
  middleware
]

const rootReducer = combineReducers({ ...reducers, router: reducer })

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
)



const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store
