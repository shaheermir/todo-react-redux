import { createStore } from 'redux'
import reducer from '../reducers'

const logger = store => next => {
  if (!console.group) {
    return next
  }

  return action => {
    console.group(action.type)
    console.log('%c Previous State', 'color: gray', store.getState())
    console.log('%c Action', 'color: blue', action)
    const returnValue = next(action)
    console.log('%c Next State', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}

const promise = store => next => action => {
  if (typeof action.then === 'function') {
    return action.then(next)
  }
  return next(action)
}

const wrapDispatchWithMiddlewares = (store, middlewares) => {
  middlewares
    .slice()
    .reverse()
    .forEach(middleware => {
      store.dispatch = middleware(store)(store.dispatch)
    })
}

const configureStore = () => {
  const store = createStore(reducer)
  const middlewares = [promise]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  wrapDispatchWithMiddlewares(store, middlewares)

  return store
}

export default configureStore
