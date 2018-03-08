import React from 'react'

import store from '../config/store'

let nextTodoId = 0

const AddTodo = ({ onAddClick }) => {
  let input
  return (
    <div>
      <input ref={node => (input = node)} />
      <button
        onClick={() => {
          store.dispatch({ type: 'ADD_TODO', id: nextTodoId++, text: input.value })
          input.value = ''
        }}
      >
        Add Todo
      </button>
    </div>
  )
}

export default AddTodo
