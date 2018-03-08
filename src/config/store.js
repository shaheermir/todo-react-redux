import { createStore } from 'redux'
import reducer from '../reducers'
import throttle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()

const store = createStore(reducer, persistedState)
store.subscribe(
  throttle(
    () =>
      saveState({
        todos: store.getState().todos
      }),
    1000
  )
)

export default store
