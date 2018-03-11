import React from 'react'

import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'

const App = () => {
  return (
    <React.Fragment>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </React.Fragment>
  )
}

export default App
