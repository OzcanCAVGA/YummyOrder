import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {


    return (
        <div className="bg-gray-800 text-white min-w-56 h-screen flex flex-col">
            <h2 className="text-lg font-bold py-4 px-6">Admin</h2>
            <ul>
                <li className="px-6 py-3">
                    <Link to="/admin">Admin Paneli</Link>
                </li>
                <li className="px-6 py-3">
                    <Link to="product-list">Ürün listele</Link>
                </li>
                <li className="px-6 py-3">
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
                {/* <li className="px-6 py-3">
                    <Link to="/view-tatistics">İstatistikleri gör</Link>
                </li> */}
            </ul>
        </div>
    );
};

export default Sidebar;
