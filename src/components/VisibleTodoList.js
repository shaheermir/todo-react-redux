import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { getVisibleTodos, getIsFetching } from '../reducers'
import * as actions from '../actions'
import TodoList from './TodoList'

class VisibleTodoList extends React.Component {
  fetchData = () => {
    const { filter, fetchTodos, requestTodos } = this.props
    requestTodos(filter)
    fetchTodos(filter)
  }

  componentDidMount () {
    this.fetchData()
  }

  componentDidUpdate (prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  render () {
    const { toggleTodo, todos, isFetching } = this.props
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }

    return <TodoList onTodoClick={toggleTodo} todos={todos} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  }
}

export default withRouter(connect(mapStateToProps, actions)(VisibleTodoList))
