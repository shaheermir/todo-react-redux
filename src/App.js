import React from 'react'
import store from './config/store'

import AddTodo from './components/AddTodo'
import VisibleTodoList from './components/VisibleTodoList'
import Footer from './components/Footer'

let nextTodoId = 0

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
