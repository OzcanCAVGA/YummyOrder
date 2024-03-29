import * as React from 'react';
import { NewProduct } from '../../components/NewProduct/NewProduct';
import { ListProduct } from '../../components/ListProduct/ListProduct';
import { AddWaiter } from '../../components/AddWaiter/AddWaiter.jsx'
import { ListWaiter } from '../../components/ListWaiter/ListWaiter.jsx';
import { TableOverview } from '../../components/Tables/TableOverview.jsx';
import { TableAddition } from '../../components/Tables/TableAddition.jsx';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';


export const Admin = () => {

    return (
        <div className='flex'>

            <Sidebar />
            <div className="flex-grow p-4">
                <div className="flex-grow p-4">
                    <Routes>
                        <Route exact path="/admin" element={<Admin />} />
                        <Route path='product-list' element={<ListProduct />} />
                        <Route path='product-new' element={<NewProduct />} />
                        <Route path='waiter-list' element={<ListWaiter />} />
                        <Route path='waiter-new' element={<AddWaiter />} />
                        <Route path='tables-list' element={<TableOverview />} />
                        <Route path='table-new' element={<TableAddition />} />
                    </Routes>
                </div>

            </div>



        </div>




    )
}



