import React from 'react'
import { Router } from '@reach/router'


import Header from './elements/Header'
import Home from './Home'
import Movies from './Movies'
import NotFound from './NotFound'

import { GlobalStyle } from './styles/GlobalStyle'

const App = () => (
  <>
    <Header />
    <Router>
      <Home path='/' />
      <Movies path='/:movieId' />
      <NotFound default />
    </Router>
    <GlobalStyle />
  </>
)

export default App