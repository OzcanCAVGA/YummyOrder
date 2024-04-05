import React from 'react'

export const Comments = ({ comment: { id, user, comment, rating } }) => {
    return (
        <div className='mt-5'>
            <h4 className='font-semibold'>{user} ({rating})</h4>

            <p className='w-full rounded-lg pl-2 border-solid border-2 border-gray-100 '>{comment}</p>
        </div>
    )
}
