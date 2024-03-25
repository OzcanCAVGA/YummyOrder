import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { RowWaiter } from './RowWaiter';


const rows = [
    {
        "_id": 1,
        "firstName": "Ahmet",
        "lastName": "Yılmaz",
        "email": "ahmet@example.com",
        "phone": "555-1234"
    },
    {
        "_id": 2,
        "firstName": "Ayşe",
        "lastName": "Kaya",
        "email": "ayse@example.com",
        "phone": "555-5678"
    },
    {
        "_id": 3,
        "firstName": "Mehmet",
        "lastName": "Demir",
        "email": "mehmet@example.com",
        "phone": "555-4321"
    },
    {
        "_id": 4,
        "firstName": "Fatma",
        "lastName": "Arslan",
        "email": "fatma@example.com",
        "phone": "555-8765"
    },
    {
        "_id": 5,
        "firstName": "Mustafa",
        "lastName": "Taş",
        "email": "mustafa@example.com",
        "phone": "555-9876"
    },
    {
        "_id": 6,
        "firstName": "Zeynep",
        "lastName": "Güler",
        "email": "zeynep@example.com",
        "phone": "555-3456"
    },
    {
        "_id": 7,
        "firstName": "Ali",
        "lastName": "Çelik",
        "email": "ali@example.com",
        "phone": "555-6543"
    },
    {
        "_id": 8,
        "firstName": "Ayhan",
        "lastName": "Sarı",
        "email": "ayhan@example.com",
        "phone": "555-2345"
    },
    {
        "_id": 9,
        "firstName": "Sevim",
        "lastName": "Kurt",
        "email": "sevim@example.com",
        "phone": "555-7890"
    },
    {
        "_id": 10,
        "firstName": "Hatice",
        "lastName": "Demirci",
        "email": "hatice@example.com",
        "phone": "555-8901"
    }
]



export const ListWaiter = () => {
    const [open, setOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [editMode, setEditMode] = useState(false)

    const handleClickOpen = (product) => {
        setSelectedProduct(product);
        setOpen(true);

    }

    const handleClose = () => {
        setOpen(false)

    }

    const handleDelete = () => {
        setOpen(false);
    }
    const handleEdit = (product) => {
        setSelectedProduct(product);
        setEditMode(true);
        console.log("ListProduct icerisindeki editMode", editMode)
    };

    const handleEditClose = () => {
        setEditMode(false);
    };


    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className='bg-slate-200'>
                        <TableRow>
                            <TableCell>Sıra</TableCell>
                            <TableCell>Adı</TableCell>
                            <TableCell>Soyadı</TableCell>
                            <TableCell>Telefon Numarası</TableCell>
                            <TableCell>Email Adresi</TableCell>
                            <TableCell align='center'>Düzenle</TableCell>
                            <TableCell align='center'>Sil</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <RowWaiter key={row._id} waiterId={row._id} firstName={row.firstName} lastName={row.lastName} email={row.email} phone={row.phone}></RowWaiter>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'>
                <DialogTitle id="alert-dialog-title">"{selectedProduct?.name}" urununu kaldirmak istediginizden emin misiniz?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Bu işlemi geri alamazsınız.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose()} color="primary">
                        Vazgeç
                    </Button>
                    <Button onClick={() => handleDelete()} color="primary" autoFocus>
                        Kaldır
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}
