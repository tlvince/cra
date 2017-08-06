import React from 'react'
import { render } from 'react-dom'

import './index.css'
import Root from './root/Root'
import registerServiceWorker from './register-service-worker'

const rootElement = document.getElementById('root')

render(<Root />, rootElement)
registerServiceWorker()

if (process.env.NODE_ENV === 'development' && module && module.hot) {
  module.hot.accept('./root/Root', () => {
    render(<Root />, rootElement)
  })
}
