import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Learn from '../pages/Learn/Learn'
import Home from '../pages/Home/Home'
import Dictionary from '../pages/Dictionary/Dictionary'
import Review from '../pages/Review/Review'

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/dictionary" component={Dictionary} />
      <Route exact path="/learn" component={Learn} />
      <Route exact path="/review" component={Review} />
    </Router>
  )
}

export default App
