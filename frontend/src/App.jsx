import React from 'react'
import './Reset.css'
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Login } from './pages/Login/Login.jsx'
import { SignUp } from './pages/SignUp/SignUp.jsx'
import { Admin } from './pages/Admin/Admin.jsx'
import { ListProduct } from './components/ListProduct/ListProduct.jsx'
import { NewProduct } from './components/NewProduct/NewProduct.jsx'
import { WaiterPanel } from './pages/Waiter/WaiterPanel.jsx'

const App = () => {
  document.title = "Yummy Order"
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/waiter/*' element={<WaiterPanel />} />
      </Routes>
    </>
  )
}

export default App;