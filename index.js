import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './src/config/store'
import App from './src/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
