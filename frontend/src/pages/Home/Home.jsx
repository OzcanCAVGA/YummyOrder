import React, { useContext } from 'react'
import { MenuBar } from '../../components/MenuBar/MenuBar.jsx'
import { Menu } from '../../components/Menu/Menu.jsx'
import { AuthProvider } from '../../contexts/AuthContext.jsx'
import { useState } from 'react'


export const Home = () => {
    const[category, setCategory] = useState("All")
    return (
        <div>
            <MenuBar setCategory={setCategory} />
            <Menu category={category}/>
        </div>
    )
}
