import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Outlet, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Login } from './pages/Login/Login.jsx'
import { SignUp } from './pages/SignUp/SignUp.jsx'
import { Admin } from './pages/Admin/Admin.jsx'
import { WaiterPanel } from './pages/Waiter/WaiterPanel.jsx'
import { ProductDetails } from './pages/ProductDetails/ProductDetails.jsx'
import { Profile } from './pages/Profile/Profile.jsx'
import { useAuth } from './contexts/AuthContext.jsx'



const App = () => {
  document.title = "Yummy Order"
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-detail/*' element={<ProductDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/waiter/*' element={<WaiterPanel />} />
       
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path='/profile/*' element={<Profile />} />
        </Route>
      </Routes>
    </>
  )
}

const ProtectedRoutes = () => {
  const { loggedIn } = useAuth()
  return loggedIn ? <Outlet /> : <Navigate to="/" />
}

export default App;