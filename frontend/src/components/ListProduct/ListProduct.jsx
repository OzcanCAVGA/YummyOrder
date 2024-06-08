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
import { UrunSatiri } from './UrunSatiri';
import { hexToRgb } from '@mui/material';
import { Admin } from '../../pages/Admin/Admin';
import { getAllProductsAdmin } from '../../api/ProductApi'
import { useQuery } from 'react-query'


export const ListProduct = () => {

  const { isLoading, error, data } = useQuery(['products'], () => getAllProductsAdmin());
  if (isLoading) {
    return 'Yükleniyor'
  }
  if (error) return 'Hata!' + error.message

  const products = data;

  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)


  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);

  }

  const handleClose = () => {
    setOpen(false)

  }

  const handleDelete = () => {
    console.log(`${selectedProduct.name} urunu kaldirildi`)
    setOpen(false);
  }
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditMode(true);

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
              <TableCell >Ürün Adı</TableCell>
              <TableCell >İçerik</TableCell>
              <TableCell >Kategori</TableCell>
              <TableCell >Fiyat&nbsp;(₺)</TableCell>
              <TableCell align='center'>Düzenle</TableCell>
              <TableCell align='center'>Sil</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <UrunSatiri
                productId={product._id}
                name={product.name}
                description={product.description}
                category={product.category}
                price={product.price} />
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
