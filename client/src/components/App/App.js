import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { useQuery } from 'react-apollo-hooks'

import { Navbar } from '../'
import Learn from '../../pages/Learn/Learn'
import Home from '../../pages/Home/Home'
import Dictionary from '../../pages/Dictionary/Dictionary'
import Review from '../../pages/Review/Review'
import Auth from '../../pages/Auth/Auth'
import AuthContext from '../../contexts/AuthContext'
import { AUTH } from '../../queries/local'

function App() {
  const {
    data: { auth }
  } = useQuery(AUTH)

  return (
    <AuthContext.Provider value={auth}>
      <Router>
        <Navbar />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/" component={Home} />
        <Route exact path="/dictionary" component={Dictionary} />
        <Route exact path="/learn" component={Learn} />
        <Route exact path="/review" component={Review} />
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </Router>
    </AuthContext.Provider>
  )
}

export default App
