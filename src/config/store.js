import ReduxLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import reducer from '../reducers'

const configureStore = () => {
  const middlewares = [ReduxThunk]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(ReduxLogger)
  }

  return createStore(reducer, applyMiddleware(...middlewares))
}

export default configureStore
