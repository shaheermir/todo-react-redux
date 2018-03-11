import { createStore } from 'redux'
import reducer from '../reducers'

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch

  if (!console.group) {
    return rawDispatch
  }

  return action => {
    console.group(action.type)
    console.log('%c Previous State', 'color: gray', store.getState())
    console.log('%c Action', 'color: blue', action)
    const returnValue = rawDispatch(action)
    console.log('%c Next State', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}

const addPromiseSupport = store => {
  const rawDispatch = store.dispatch

  return action => {
    if (typeof action.then === 'function') {
      return action.then(rawDispatch)
    }
    return rawDispatch(action)
  }
}

const configureStore = () => {
  const store = createStore(reducer)

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store)
  }

  store.dispatch = addPromiseSupport(store)

  return store
}

export default configureStore
