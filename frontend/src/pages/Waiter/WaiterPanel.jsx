import React from 'react'
import { WSidebar } from './WSidebar'
import { TableOverview } from '../../components/Tables/TableOverview'
import { Route, Routes } from 'react-router-dom'

export const WaiterPanel = () => {
  return (
    <div className='flex'>
      <WSidebar />
      <div className="flex-grow p-4">
        <div className="flex-grow p-4">
          <h1>Garson Paneli</h1>
        </div>
      </div>
    </div>
  )
}
