import React, { useState } from 'react'
import { toggleUserAuthority } from '../../api/UserApi'
import Button from '@mui/material/Button';
import { QueryClient, useQueryClient } from 'react-query';



const WaiterCandidate = ({ firstName, lastName, authority, userId }) => {
    const queryClient = useQueryClient()


    const [userAuthority, setUserAuthority] = useState(authority);
    const handleToggleAuthority = async () => {
        try {
            await toggleUserAuthority(userId);
            const updatedUser = queryClient.invalidateQueries('authority', { refetchActive: true })
            setUserAuthority(updatedUser.authority);
        } catch (error) {
            console.error("Yetki güncellenirken hata oluştu:", error);
        }
    };
    console.log(userAuthority)


    const authorityText = (userAuthority === 'customer') ? 'Müşteri' : 'Garson';
    const buttonText = (userAuthority === 'customer') ? 'Garson Yap' : 'Müşteri Yap';
    const buttonColor = (userAuthority === 'customer') ? 'primary' : 'secondary';
    return (
        <div className="flex max-w-4xl my-6 p-8 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="max-w-72 flex-grow text-gray-800 text-2xl">{firstName} {lastName}</div>
            <div className="flex-grow text-gray-600 text-center">{authorityText}</div>
            <Button
                color={buttonColor}
                variant="contained"
                onClick={handleToggleAuthority}
            >
                {buttonText}
            </Button>

        </div>
    )
}

export default WaiterCandidate