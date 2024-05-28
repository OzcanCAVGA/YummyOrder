import React from 'react'
import UserSidebar from './UserSidebar.jsx';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import { AccountSettings } from '../../components/AccountSettings/AccountSettings.jsx';
import { OrderHistory } from '../../components/OrderHistory/OrderHistory.jsx';
import { useAuth } from '../../contexts/AuthContext.jsx';


export const Profile = () => {

    const { user, loggedIn } = useAuth()
    console.log(user)
    console.log("loggedin:::",loggedIn)
    const ProtectedRoutes = () => {
        return loggedIn ? <Outlet /> : <Navigate to="/" />
    }



    return (
        <div className='flex'>
            <UserSidebar />
            <div className="flex-grow p-4">
                <div className="flex-grow p-4">
                    <Routes path="/" element={<ProtectedRoutes />}>
                        <Route exact path="/profile" element={<Profile />} />
                        <Route path={`account-settings/:userid`} element={<AccountSettings />} />
                        <Route path="order-history" element={<OrderHistory />} />
                        {/* <Route path='tables-list' element={<TableOverview />} /> */}
                    </Routes>
                </div>

            </div>

        </div>
    )


}
