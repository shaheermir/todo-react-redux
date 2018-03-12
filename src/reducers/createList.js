import { RECEIVE_TODOS } from '../actions/types'
import { combineReducers } from 'redux'

const createList = filter => {
  const ids = (state = [], action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case RECEIVE_TODOS:
        return action.response.map(todo => todo.id)
      default:
        return state
    }
  }

  const isFetching = (state = false, action) => {
    console.log(action)
    console.log(filter)
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case 'REQUEST_TODOS':
        return true
      case RECEIVE_TODOS:
        return false
    }
  }

  return combineReducers({
    ids,
    isFetching
  })
}

export default createList

export const getIds = state => state.ids

export const getIsFetching = state => state.isFetching