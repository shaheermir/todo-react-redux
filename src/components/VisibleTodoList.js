import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { getVisibleTodos } from '../reducers'
import * as actions from '../actions'
import TodoList from './TodoList'

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
    const { toggleTodo, ...rest } = this.props
    return <TodoList onTodoClick={toggleTodo} {...rest} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
}

export default withRouter(connect(mapStateToProps, actions)(VisibleTodoList))
