import React from 'react'
import { connect } from 'react-redux'

import { toggleTodo } from '../actions'
import Todo from './Todo'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos
    case 'active':
      return todos.filter(todo => !todo.completed)
    case 'completed':
      return todos.filter(todo => todo.completed)
  }
}

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />)}
  </ul>
)

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state.todos, ownProps.filter)
})

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
