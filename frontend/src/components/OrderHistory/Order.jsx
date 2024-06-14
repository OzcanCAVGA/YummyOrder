import React from 'react';
import { useQuery } from 'react-query';
import { getUser } from '../../api/UserApi';
import { getProductById } from '../../api/ProductApi';

export const Order = ({ order }) => {
    console.log(order)

    return (
        <div className='flex max-w-4xl my-6 p-8 bg-white rounded-lg shadow-md hover:shadow-lg '>
            <div className='w-full'>
                <ProductDetail key={order} productId={order} />
            </div>
        </div>
    );
};

const ProductDetail = ({ productId }) => {
    console.log(productId);
    const { isLoading: productLoading, error: productError, data: productData } = useQuery(['product', productId], () => getProductById(productId));
    console.log(productData);

    if (productLoading) {
        return <div>Ürün Yükleniyor...</div>;
    }
    if (productError) return <div>Hata! { }</div>;


    return (
        <>
            <div className='flex justify-between'>
                <div className='font-bold text-xl'>{productData.name}</div>
                <div className='font-bold text-xl'>{productData.price} TL</div>
            </div>
            <div className='border-b-[1px] border-gray-700 flex w-full justify-between'>

            </div>
            <div className='flex justify-between'>

                <div>
                    <div className='text-gray-500 font-light italic text-sm'>{productData.category}</div>
                    <div>{productData.description}</div>
                </div>
                <div className='text-gray-500 font-light italic text-sm pl-2'></div>
            </div></>
    );
};

export default Order;
