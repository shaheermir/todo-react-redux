import React from 'react'
import { withRouter } from 'react-router'
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
  todos: getVisibleTodos(state.todos, ownProps.params.filter || 'all')
})

export default withRouter(connect(mapStateToProps, { onTodoClick: toggleTodo })(TodoList))
