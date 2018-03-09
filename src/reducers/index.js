import { combineReducers } from 'redux'
import TodosReducer from './TodosReducer'

const rootReducer = combineReducers({
  todos: TodosReducer
})

export default rootReducer
