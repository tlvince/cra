import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore as createReduxStore, applyMiddleware } from 'redux'

import reducer from './reducer'

const getStoreEnhancers = () => {
  const middlewares = [
    thunkMiddleware
  ]

  const appliedMiddlewares = applyMiddleware(...middlewares)

  if (process.env.NODE_ENV === 'development') {
    return composeWithDevTools(appliedMiddlewares)
  }

  return appliedMiddlewares
}

const createStore = (preloadedState = {}) => {
  const enhancers = getStoreEnhancers()
  const store = createReduxStore(reducer, preloadedState, enhancers)

  if (process.env.NODE_ENV === 'development' && module && module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(reducer)
    })
  }

  return store
}

export default createStore
