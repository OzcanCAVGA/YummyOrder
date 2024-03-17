import React from 'react'

import { MenuCard } from '../MenuCards/MenuCard'


export const Menu = () => {
    return (
        <div className='flex justify-center w-8/12 m-auto mt-16'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-700 w-full">
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
                <MenuCard />
            </div>
        </div>
    )
}
