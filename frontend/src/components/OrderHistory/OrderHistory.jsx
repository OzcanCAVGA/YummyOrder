import React from 'react'
import Order from './Order.jsx'
import { getOrder } from '../../api/OrderApi.js'
import { useAuth } from '../../contexts/AuthContext.jsx'
import { useQuery } from 'react-query'
useAuth
export const OrderHistory = () => {
    const { user } = useAuth();
    const { isLoading, error, data } = useQuery(['orders'], () => getOrder())

    if (isLoading)
        return 'Yükleniyor'
    if (error)
        return "Hata!" + error.message

    const orders = data
    console.log(orders)
    return (
        <div>
            <h1 className='text-3xl'>Geçmiş Siparişlerim</h1>

            {
                orders.map(order => (
                    < Order key={order._id} order={order.product[0]} />
                ))
            }
        </div>
    )
}
