import React from 'react'
import logo from '../../assets/logo.png'
import ContactsIcon from '@mui/icons-material/Contacts';
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext';
const Navbar = () => {
  const { loggedIn } = useAuth()
  return (
    <div className=' flex justify-between rounded-lg m-3 px-4 py-4 shadow-lg bg-white '>
      <div className="nav-logo flex items-center mx-10 justify-center gap-2">
        <Link to="/">
          <img className='h-12' src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-login-cart flex items-center gap-10 mx-10">
        {!loggedIn && <Link to="/login">
          <button className='w-32 h-8 outline-none border-[1px] rounded-lg transition duration-300 text-green-600 text-base  bg-white border-green-500 hover:bg-green-500 hover:text-white '>Giriş Yap</button>
        </Link>}
        
        {!loggedIn && <Link to="/signup">
          <button className='w-32 h-8 outline-none border-[1px] rounded-lg transition duration-300 text-base  border-green-500 bg-green-500  text-white '>Kayıt Ol</button>
        </Link>}
        
        {loggedIn && <Link to="/admin">
          <button className='w-32 h-8 outline-none border-[1px] rounded-lg transition duration-300 text-base  border-red-500 bg-red-500  text-white '>ADMIN</button>
        </Link>}
        {loggedIn && <Link to="/waiter">
          <button className='w-32 h-8 outline-none border-[1px] rounded-lg transition duration-300 text-base  border-blue-500 bg-blue-500  text-white '>GARSON</button>
        </Link>}
        
        {loggedIn && <Link to="/profile">
          <button className='w-16 h-8 outline-none border-[1px] rounded-lg transition duration-300 text-base  border-[#577E2C] bg-[#94C832]  text-white '><ContactsIcon /> </button>
        </Link>}
        
      </div>


    </div>
  )
}

export default Navbar