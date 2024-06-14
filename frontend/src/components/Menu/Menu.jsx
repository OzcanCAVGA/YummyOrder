import React from 'react'
import { MenuCard } from '../MenuCards/MenuCard'
import { getAllProducts } from '../../api/ProductApi'
import { useQuery } from 'react-query'


export const Menu = ({category}) => {
    const { isLoading, error, data } = useQuery("products", () => getAllProducts())

    if (isLoading) return "Yükleniyor"
    if (error) return "Hata " + error.message
    // "_id": "663d24e54617e630152a39df",
    // "name": "tavuk sote",
    // "description": "tavuk soteyle degistirdik",
    // "category": "Tatlilar",
    // "price": 150,
    // "__v": 0


    return (
        <div className='flex justify-center w-8/12 m-auto mt-16 mb-16'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-700 w-full ">
                {data.map((item => {
                    if(item.category == category || category == "All"){
                        return (<MenuCard key={item._id} id={item._id} name={item.name} description={item.description} category={item.category} price={item.price} images = {item.images}/>)
                    }
                    
                }))}

            </div>
        </div>
    )
}
