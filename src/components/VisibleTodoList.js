import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { getVisibleTodos } from '../reducers'
import { toggleTodo } from '../actions'
import { fetchTodos } from '../api'
import TodoList from './TodoList'

class VisibleTodoList extends React.Component {
  fetchData = () => {
    fetchTodos(this.props.filter).then(todos => console.log(this.props.filter, todos))
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
    return <TodoList {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
}

export default withRouter(
  connect(mapStateToProps, { onTodoClick: toggleTodo })(VisibleTodoList)
)
