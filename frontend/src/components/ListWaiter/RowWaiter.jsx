import React, { useState } from 'react'
import { EditWaiterForm } from './EditWaiterForm.jsx'
import { IconButton, TableCell, TableRow } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { Popconfirm, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import DeleteIcon from '@mui/icons-material/Delete';


export const RowWaiter = ({ waiterId, firstName, lastName, email, phone }) => {

    const [editOpen, setEditOpen] = useState(false)

    const handleEditOpen = () => {
        setEditOpen(true)
    }
    const handleEditClose = () => {
        setEditOpen(false)
    }

    const popconConfirm = (e) => {
        message.success("Ürün başarıyla silindi")
    }


    return (
        <TableRow key={waiterId}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{waiterId}</TableCell>
            <TableCell>{firstName}</TableCell>
            <TableCell>{lastName}</TableCell>
            <TableCell>{phone}</TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>
                <IconButton onClick={handleEditOpen}>
                    <EditIcon />
                </IconButton>
                <EditWaiterForm
                    open={editOpen}
                    onClose={handleEditClose}
                    firstName={firstName}
                    lastName={lastName}
                    phone={phone}
                    email={email}
                />
            </TableCell>

            {/* delete butonu */}
            <TableCell >
                <Popconfirm
                    title="Garsonu sil"
                    description="Garsonu silmek istediğinden emin misin?"
                    onConfirm={popconConfirm}
                    okText="Evet"
                    cancelText="Hayır"
                    icon={
                        <QuestionCircleOutlined
                            style={{
                                color: 'red',
                            }}
                        />
                    }
                    okButtonProps={{
                        style: {
                            backgroundColor: '#22c55e',
                            color: 'white',
                        },
                    }}
                >
                    <IconButton><DeleteIcon /></IconButton>
                </Popconfirm>

            </TableCell>
        </TableRow>
    )
}
