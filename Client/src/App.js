import React from 'react'
import HomePage from './pages/home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import UserPreview from './pages/userpreview'
import RegisterScreen from './pages/signup'
import LoginScreen from './pages/login'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserPreview/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/register' element={<RegisterScreen/>} />
        <Route path='/login' element={<LoginScreen/>} />
      </Routes>
    </Router>
  )
}

export default App