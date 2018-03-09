import React from 'react'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

const App = () => {
  return (
    <React.Fragment>
      <AddTodo />
      <TodoList />
      <Footer />
    </React.Fragment>
  )
}

export default App
