import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers'
import * as actions from '../actions'
import TodoList from './TodoList'
import FetchError from './FetchError'

class VisibleTodoList extends React.Component {
  fetchData = () => {
    const { filter, fetchTodos } = this.props
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
    const { toggleTodo, todos, isFetching, errorMessage } = this.props
    if (isFetching && !todos.length) {
      return <p>Loading...</p>
    }

    if (errorMessage && !todos.length) {
      return <FetchError message={errorMessage} onRetry={this.fetchData} />
    }

    return <TodoList onTodoClick={toggleTodo} todos={todos} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    filter
  }
}

export default withRouter(connect(mapStateToProps, actions)(VisibleTodoList))
