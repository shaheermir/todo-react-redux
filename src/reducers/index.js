import { combineReducers } from 'redux'
import TodosReducer, * as fromTodos from './TodosReducer'

const rootReducer = combineReducers({
  todos: TodosReducer
})

export default rootReducer

export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter)
