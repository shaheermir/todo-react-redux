import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './src/config/store'
import Root from './src/Root'

const store = configureStore()

ReactDOM.render(<Root store={store} />, document.getElementById('app'))
