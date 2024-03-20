import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='Navbar flex justify-between  px-4 py-4 shadow-md bg-green-100 '>
      <div className="nav-logo flex items-center mx-10 justify-center gap-2">
        <Link to="/">
          <img className='h-12' src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-login-cart flex items-center gap-10 mx-10">
        <Link to="/login">
          <button className='w-32 h-8 outline-none border-[1px] rounded-lg transition duration-300 text-green-600 text-base  bg-white border-green-500 hover:bg-green-500 hover:text-white '>Giriş Yap</button>
        </Link>

        <Link to="/signup">
          <button className='w-32 h-8 outline-none border-[1px] rounded-lg transition duration-300 text-base  border-green-500 bg-green-500  text-white '>Kayıt Ol</button>
        </Link>

        <Link to="/admin">
          <button className='w-32 h-8 outline-none border-[1px] rounded-lg transition duration-300 text-base  border-red-500 bg-red-500  text-white '>ADMIN</button>
        </Link>
      </div>


    </div>
  )
}

export default Navbar