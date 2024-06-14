import React from 'react'
import { TableCart } from './TableCart'
import { getAllTables } from '../../api/TableApi'
import {useQuery} from 'react-query'



export const TableOverview = () => {

    const {isLoading, error, data} = useQuery(['tables'], ()=> getAllTables())
    if (isLoading) {
        return 'Yükleniyor';
      }
      if (error) return 'Hata!' + error.message;
    
      console.log(data)


    return (
        <div className='flex gap-3 max-w-screen-lg flex-wrap'> {
            data.map(table => (
                <TableCart table={table} />
            ))
        } </div>
    )
}
