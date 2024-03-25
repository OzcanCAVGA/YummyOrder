import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


function createData(firstName, lastName, email, phoneNumber) {
    return { firstName, lastName, email, phoneNumber }
}

const rows = [
    createData('Ahmet', 'Yılmaz', 'ahmet@example.com', '555-1234'),
    createData('Ayşe', 'Kaya', 'ayse@example.com', '555-5678'),
    createData('Mehmet', 'Demir', 'mehmet@example.com', '555-4321'),
    createData('Fatma', 'Arslan', 'fatma@example.com', '555-8765'),
    createData('Mustafa', 'Taş', 'mustafa@example.com', '555-9876'),
    createData('Zeynep', 'Güler', 'zeynep@example.com', '555-3456'),
    createData('Ali', 'Çelik', 'ali@example.com', '555-6543'),
    createData('Ayhan', 'Sarı', 'ayhan@example.com', '555-2345'),
    createData('Sevim', 'Kurt', 'sevim@example.com', '555-7890'),
    createData('Hatice', 'Demirci', 'hatice@example.com', '555-8901'),
];


export const RemoveWaiter = () => {
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
        // burada islemler yapilacak //
        console.log(`${selectedProduct.name} urunu kaldirildi`)
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
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Adı</TableCell>
                            <TableCell align="right">Soyadı</TableCell>
                            <TableCell align="right">Email Adresi</TableCell>
                            <TableCell align="right">Telefon Numarası</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right">{row.category}</TableCell>
                                <TableCell align="right">{row.price}₺</TableCell>
                                <TableCell align='right'>
                                    <IconButton aria-label='edit' onClick={() => handleEdit(row)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton aria-label='delete' onClick={() => handleClickOpen(row)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                                {editMode && (
                                    <EditProductForm
                                        row={row}
                                        editMode={editMode}
                                    />
                                )}
                            </TableRow>
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
