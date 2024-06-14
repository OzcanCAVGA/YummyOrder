import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { Outlet, Routes, Route, Navigate, useParams } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { Login } from './pages/Login/Login.jsx'
import { SignUp } from './pages/SignUp/SignUp.jsx'
import { Admin } from './pages/Admin/Admin.jsx'
import { WaiterPanel } from './pages/Waiter/WaiterPanel.jsx'
import { ProductDetails } from './pages/ProductDetails/ProductDetails.jsx'
import { Profile } from './pages/Profile/Profile.jsx'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart.jsx'
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx'
import { ListProduct } from './components/ListProduct/ListProduct.jsx'
import NewProduct from './components/NewProduct/NewProduct.jsx'
import { AddWaiter } from './components/AddWaiter/AddWaiter.jsx'
import { AccountSettings } from './components/AccountSettings/AccountSettings.jsx'
import { OrderHistory } from './components/OrderHistory/OrderHistory.jsx'
import { TableOverview } from './components/Tables/TableOverview.jsx'
import { TableAddition } from './components/Tables/TableAddition.jsx'
 // import { TableEdit } from './components/Tables/TableEdit.jsx'




const App = () => {
  document.title = "Yummy Order"

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/product-detail/:productid' element={<ProductDetails />} />


        <Route path='/' element={<ProtectedAdminRoutes />}>
          <Route path='admin' element={<Admin />} >
            <Route path='product-list' element={<ListProduct />} />
            <Route path='product-new' element={<NewProduct />} />
            <Route path='waiter-new' element={<AddWaiter />} />
            <Route path='tables-list' element={<TableOverview />} />
            <Route path='table-new' element={<TableAddition />} />
            {/* <Route path='table-edit' element={<TableEdit />} /> */}
          </Route>
        </Route>



        <Route path="/" element={<ProtectedRoutes />}>
          <Route path='profile' element={<Profile />} >
            <Route path='account-settings' element={<AccountSettings />} />
            <Route path='order-history' element={<OrderHistory />} />
            <Route path='tables-list' element={<TableOverview />} />
          </Route>
        </Route>

        <Route path='/' element={<ProtectedWaiterRoutes />}>
          <Route path='waiter' element={<WaiterPanel />} >
            <Route path='tables-list' element={<TableOverview />} />

          </Route>

        </Route>

      </Routes>
    </>
  )
}

const ProtectedRoutes = () => {
  const { loggedIn, user } = useAuth()
  console.log("ProtectedRoutestayimmmm", user)
  return loggedIn ? <Outlet /> : <Navigate to="/login" />
}


const ProtectedAdminRoutes = () => {
  const { loggedIn } = useAuth()
  const { user } = useAuth()
  console.log("app.js teyim::::::", user.authority)
  return loggedIn && user.authority == 'admin' ? <Outlet /> : <Navigate to="/" />
}

const ProtectedWaiterRoutes = () => {
  const { loggedIn, user } = useAuth();
  return loggedIn && (user.authority === 'admin' || user.authority == 'waiter') ? <Outlet /> : <Navigate to="/" />
}

export default App;