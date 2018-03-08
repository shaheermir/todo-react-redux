import React from 'react'
import { connect } from 'react-redux'

import Todo from './Todo'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
  }
}

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />)}
  </ul>
)

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch({ type: 'TOGGLE_TODO', id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
