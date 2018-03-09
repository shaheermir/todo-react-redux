import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import { getVisibleTodos } from '../reducers'
import { toggleTodo } from '../actions'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />)}
  </ul>
)

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(state, ownProps.params.filter || 'all')
})

export default withRouter(connect(mapStateToProps, { onTodoClick: toggleTodo })(TodoList))
