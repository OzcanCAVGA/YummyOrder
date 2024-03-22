import React, { useState } from 'react';
import { EditProductForm } from './EditProductForm';
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


function createData(name, description, category, price) {
  return { name, description, category, price }
}

const rows = [
  createData('Çilekli Cheesecake', "Taze çileklerle süslenmiş, kremsi ve lezzetli bir cheesecake", "Tatlılar", 24.99),
  createData('Ispanaklı Börek', "Yumuşak yufka içinde nefis ıspanak dolgusu.", "Sıcak Yemekler", 12.50),
  createData('Türk Kahvesi', "Geleneksel Türk kahvesi, köpüklü ve aromatik.", "İçecekler", 8.00),
  createData('Margarita Pizza', "İnce hamur üzerine domates sosu, mozzarella peyniri ve taze fesleğen ile hazırlanan pizza.", "Sıcak Yemekler", 18.00),
  createData('Çikolatalı Profiterol', "İçi kremalı, üzeri çikolata sosuyla kaplı profiterol.", "Tatlılar", 14.99),
];


export const ListProduct = () => {
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
              <TableCell>Ürün Adı</TableCell>
              <TableCell align="right">İçerik</TableCell>
              <TableCell align="right">Kategori</TableCell>
              <TableCell align="right">Fiyat&nbsp;(₺)</TableCell>

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
