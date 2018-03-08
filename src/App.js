import React from 'react'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

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
