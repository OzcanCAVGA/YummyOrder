import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Login } from './pages/Login/Login.jsx'
import { SignUp } from './pages/SignUp/SignUp.jsx'
import { Admin } from './pages/Admin/Admin.jsx'
import { WaiterPanel } from './pages/Waiter/WaiterPanel.jsx'
import { ProductDetails } from './pages/ProductDetails/ProductDetails.jsx'
import { Profile } from './pages/Profile/Profile.jsx'

const App = () => {
  document.title = "Yummy Order"
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-detail/*' element={<ProductDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/waiter/*' element={<WaiterPanel />} />
        <Route path='/profile/*' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App;