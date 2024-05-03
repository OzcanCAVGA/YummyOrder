import React from 'react'

export const Order = ({ product }) => {

    return (
        <div key={product.id} className='flex   max-w-4xl my-6 p-8 bg-white rounded-lg shadow-md hover:shadow-lg '>
            <div >
                <img className='w-16 h-16 mr-5 rounded-lg' src={product.imgUrl} alt="" />
            </div>
            <div className='w-full'>
                <div className='border-b-[1px] border-gray-700 flex  w-full justify-between'>
                    <div className='flex '>
                        <div className='font-bold text-xl'>{product.urunIsmi} </div>
                        <div className='text-gray-500 font-light italic text-sm pl-2'>({product.kategori}) </div>
                    
                    </div>
                    <div className='min-w-10'>{product.siparisTarihi}</div>
                </div>
                <div className='flex justify-between'>
                    <div>{product.icerik}</div>
                    <div className='bg-gray-700 p-1 rounded-md my-1 text-white '>Masa No: {product.masaNo}</div>
                </div>
            </div>


        </div>
    )
}


export default Order;