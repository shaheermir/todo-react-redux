import { combineReducers } from 'redux'
import TodosReducer from './TodosReducer'
import VisibilityFilterReducer from './VisibilityFilterReducer'

const rootReducer = combineReducers({
  todos: TodosReducer,
  visibilityFilter: VisibilityFilterReducer
})

export default rootReducer
