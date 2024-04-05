import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    const getActiveClass = (path) => {
        return location.pathname === path ? 'active-link' : '';
    };



    return (
        <div className="bg-white m-3 rounded-lg text-green-900 min-w-56 h-3/4 flex flex-col py-5 shadow-lg text-lg">
            <h2 className="text-lg font-bold py-4 px-6">Admin</h2>
            <ul>
                <li className="px-6 py-3 ">
                    <Link to="/admin">Admin Paneli</Link>
                </li>
                <li className="px-6 py-3">
                    <Link to="product-list">Ürün listele</Link>
                </li>
                <li className={`px-6 py-3 ${getActiveClass('/product-new')}`}>
                    <Link to="product-new">Ürün ekle</Link>
                </li>
                <li className="px-6 py-3">
                    <Link to="waiter-list">Garson listele</Link>
                </li>
                <li className="px-6 py-3">
                    <Link to="waiter-new">Garson ekle</Link>
                </li>
                <li className="px-6 py-3">
                    <Link to="tables-list">Masa listele</Link>
                </li>
                <li className="px-6 py-3">
                    <Link to="table-new">Masa ekle</Link>
                </li>
                <li className="px-6 py-3">
                    <Link to="table-edit">Masa düzenle</Link>
                </li>
                {/* <li className="px-6 py-3">
                    <Link to="/view-tatistics">İstatistikleri gör</Link>
                </li> */}
            </ul>
        </div>
    );
};

export default Sidebar;
