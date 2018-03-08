import React from 'react'

import TodoList from './TodoList'
import store from '../config/store'

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

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const props = this.props
    const state = store.getState()

    return (
      <TodoList
        todos={getVisibleTodos(state.todos, state.visibilityFilter)}
        onTodoClick={id => store.dispatch({ type: 'TOGGLE_TODO', id })}
      />
    )
  }
}

export default VisibleTodoList
