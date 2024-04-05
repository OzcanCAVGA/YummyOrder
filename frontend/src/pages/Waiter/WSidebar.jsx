import React from 'react'
import { Link } from 'react-router-dom';

export const WSidebar = () => {
    return (
        <div className="bg-gray-800 m-3 rounded-lg text-white min-w-56 h-3/4 flex flex-col py-5">
            <h2 className="text-lg font-bold py-4 px-6">Garson</h2>
            <ul>
                <li className="px-6 py-3">
                    <Link to="/waiter">Garson Panel</Link>
                </li>

                <li className="px-6 py-3">
                    <Link to="tables-list">Masa listele</Link>
                </li>
                {/* <li className="px-6 py-3">
                    <Link to="/view-tatistics">İstatistikleri gör</Link>
                </li> */}
            </ul>
        </div>
    );
}
