import React, { useContext } from 'react'
import { MenuBar } from '../../components/MenuBar/MenuBar.jsx'
import { Menu } from '../../components/Menu/Menu.jsx'
import { AuthProvider } from '../../contexts/AuthContext.jsx'



export const Home = () => {
    return (
        <div>
            <MenuBar />
            <Menu />
        </div>
    )
}
