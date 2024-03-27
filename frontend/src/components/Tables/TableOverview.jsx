import React from 'react'
import { TableCart } from './TableCart'

const tables = [
    {
        "id": 1,
        "name": "Celal Şengör",
        "status": "empty"
    },
    {
        "id": 2,
        "name": "Table 2",
        "status": "occupied"
    },
    {
        "id": 3,
        "name": "Table 3",
        "status": "empty"
    },
    {
        "id": 4,
        "name": "Table 4",
        "status": "reserved"
    },
    {
        "id": 5,
        "name": "Table 5",
        "status": "empty"
    }
]
// pages -> Admin -> Admin ->
// TableOverview -> TableCart -> TableOrders
// TableAddition 
// TableEdit

export const TableOverview = () => {
    return (
        <div className='flex gap-3 max-w-screen-lg flex-wrap'> {
            tables.map(table => (
                <TableCart table={table} />
            ))
        } </div>
    )
}
