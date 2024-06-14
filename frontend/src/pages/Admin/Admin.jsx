import * as React from 'react';
import NewProduct from '../../components/NewProduct/NewProduct.jsx';
import { ListProduct } from '../../components/ListProduct/ListProduct';
import { AddWaiter } from '../../components/AddWaiter/AddWaiter.jsx'
import { ListWaiter } from '../../components/ListWaiter/ListWaiter.jsx';
import { TableOverview } from '../../components/Tables/TableOverview.jsx';
import { TableAddition } from '../../components/Tables/TableAddition.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
// import { TableEdit } from '../../components/Tables/TableEdit.jsx';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.jsx';

export const Admin = () => {
    React.useContext(useAuth)
    const { user, loggedIn } = useAuth()
    console.log(user)
    console.log("loggedin:::", loggedIn)



    return (
        <div className='flex'>
            <Sidebar />
            <div className="flex-grow p-4">
                <div className="flex-grow p-4">
                    <Outlet />
                </div>
            </div>
        </div>

    )
}



