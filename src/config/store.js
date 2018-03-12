import ReduxLogger from 'redux-logger'
import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'

import reducer from '../reducers'

const configureStore = () => {
  const middlewares = [ReduxPromise]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(ReduxLogger)
  }

  return createStore(reducer, applyMiddleware(...middlewares))
}

export default configureStore
