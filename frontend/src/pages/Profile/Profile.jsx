import React from 'react'
import UserSidebar from './UserSidebar.jsx';
import { Route, Routes } from 'react-router-dom'
import { AccountSettings } from './AccountSettings.jsx';

export const Profile = () => {
    return (
        <div className='flex'>
            <UserSidebar />
            <div className="flex-grow p-4">
                <div className="flex-grow p-4">
                    <Routes>
                        <Route exact path="/profile" element={<Profile />} />
                        <Route  path="account-settings" element={<AccountSettings />} />
                        {/* <Route path='tables-list' element={<TableOverview />} /> */}
                    </Routes>
                </div>

            </div>

        </div>
    )
}
