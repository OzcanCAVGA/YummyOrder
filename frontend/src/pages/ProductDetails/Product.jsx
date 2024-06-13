import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import React, { useEffect, useState } from 'react'
import { toggleUserAuthority } from '../../api/UserApi';

export const Product = ({ name, description, category, price, images }) => {

    const { user, basket, addBasket, deleteBasket } = toggleUserAuthority();
    const isInBasket = () => {
        return basket.some(item => item.id === id);
    };
    const handleBasket = async () => {
        if (user) {
            if (!isInBasket()) {
                addBasket({
                    id: id,
                    name: name,
                    description: description,
                    category: category,
                    price: price,
                    images: images
                });
            } else {
                deleteBasket({
                    id: id,
                    name: name,
                    description: description,
                    category: category,
                    price: price,
                    images: images
                })
            }
        }
    };


    return (
        <>
            <h2 className='text-5xl'>{name}</h2>
            <h6 className='text-base italic text-gray-400 mt-3'>{category} </h6>
            <img className='rounded-xl my-5 ' src={images} alt="" />
            <p className='shadow-sm'> {description}</p>
            <div className='flex items-center  pt-5'>
                <h3 className=' text-4xl'>{price}₺</h3>
                <Button
                    size="small"
                    style={{ backgroundColor: isInBasket() ? 'red' : '' }}
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    onClick={handleBasket}
                >
                    Sepete Ekle
                </Button>
            </div>
        </>
    )
}
