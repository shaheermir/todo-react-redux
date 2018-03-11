import { v4 } from 'node-uuid'
import * as api from '../api'
import { ADD_TODO, TOGGLE_TODO, RECEIVE_TODOS } from './types'

export const addTodo = text => ({
  type: ADD_TODO,
  id: v4(),
  text
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const fetchTodos = filter =>
  api.fetchTodos(filter).then(response => receiveTodos(filter, response))

const receiveTodos = (filter, response) => ({
  type: RECEIVE_TODOS,
  response
})
