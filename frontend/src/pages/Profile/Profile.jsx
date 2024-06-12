import React, { useContext } from 'react'
import UserSidebar from './UserSidebar.jsx';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import { AccountSettings } from '../../components/AccountSettings/AccountSettings.jsx';
import { OrderHistory } from '../../components/OrderHistory/OrderHistory.jsx';
import { useAuth } from '../../contexts/AuthContext.jsx';


export const Profile = () => {
    // useContext(useAuth)
    // const { user, loggedIn } = useAuth()
    // console.log(user)
    // console.log("loggedin:::", loggedIn)



    return (
        <div className='flex'>
            <UserSidebar />
            <div className="flex-grow p-4">
                <div className="flex-grow p-4">
                    <Outlet />
                </div>
            </div>

        </div>
    )


}
