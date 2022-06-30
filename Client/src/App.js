import React from 'react'
import HomePage from './pages/home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import UserPreview from './pages/userpreview'
import RegisterScreen from './pages/signup'
import LoginScreen from './pages/login'
import BookRestaurant from './pages/Booking&Ordering/bookRestaurant'
import MyCart from './pages/Booking&Ordering/mycart'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserPreview/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/register' element={<RegisterScreen/>} />
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='/book' element={<BookRestaurant/>} />
        <Route path='/mycart' element={<MyCart/>} />
      </Routes>
    </Router>
  )
}

export default App