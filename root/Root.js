import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './Routes'
import createStore from './store'

const store = createStore()

const Root = () =>
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>

export default Root
