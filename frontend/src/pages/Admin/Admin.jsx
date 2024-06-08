import * as React from 'react';
import { NewProduct } from '../../components/NewProduct/NewProduct';
import { ListProduct } from '../../components/ListProduct/ListProduct';
import { AddWaiter } from '../../components/AddWaiter/AddWaiter.jsx'
import { ListWaiter } from '../../components/ListWaiter/ListWaiter.jsx';
import { TableOverview } from '../../components/Tables/TableOverview.jsx';
import { TableAddition } from '../../components/Tables/TableAddition.jsx';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import { TableEdit } from '../../components/Tables/TableEdit.jsx';
import { Outlet } from 'react-router-dom';

export const Admin = () => {

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



