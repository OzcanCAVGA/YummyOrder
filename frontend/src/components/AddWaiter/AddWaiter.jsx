import React, { useState } from 'react'
import { getUsersAndWaiters } from '../../api/UserApi'
import { useQuery, useQueryClient } from 'react-query'
import WaiterCandidate from './WaiterCandidate';


export const AddWaiter = () => {

    const { isLoading, error, data } = useQuery(['waiterCandidates '], () => getUsersAndWaiters());
    if (isLoading) {
        return 'Yükleniyor'
    }
    if (error) return 'Hata!' + error.message

    const waiterCandidates = data.data || []
    return (

        <div className="flex ">
            <div className="container ">

                {
                    waiterCandidates.map((waiterCandidate) => (
                        <WaiterCandidate
                            key={waiterCandidate._id}
                            userId={waiterCandidate._id}
                            firstName={waiterCandidate.firstName}
                            lastName={waiterCandidate.lastName}
                            authority={waiterCandidate.authority}
                        />
                    ))
                }

            </div>
        </div>

    )
}
