import React from 'react'

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

const App = ({ params }) => {
  console.log(params)
  return (
    <React.Fragment>
      <AddTodo />
      <TodoList filter={params.filter || 'all'} />
      <Footer />
    </React.Fragment>
  )
}

export default App
