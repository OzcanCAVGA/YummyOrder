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
import { getAllProductsAdmin } from '../../api/ProductApi';
import { useQuery, useQueryClient } from 'react-query';
import { deleteProduct } from '../../api/ProductApi';

export const ListProduct = () => {
  const { isLoading, error, data } = useQuery(['products'], () => getAllProductsAdmin());

  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editMode, setEditMode] = useState(false); // Ensure this state is defined

  if (isLoading) {
    return 'Yükleniyor';
  }
  if (error) return 'Hata!' + error.message;

  const products = data;

  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              <TableCell>Ürün Adı</TableCell>
              <TableCell>İçerik</TableCell>
              <TableCell>Kategori</TableCell>
              <TableCell>Fiyat&nbsp;(₺)</TableCell>
              <TableCell align='center'>Düzenle</TableCell>
              <TableCell align='center'>Sil</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <UrunSatiri
                key={product._id}
                productId={product._id}
                name={product.name}
                description={product.description}
                category={product.category}
                price={product.price}
                onEdit={() => handleEdit(product)} // Ensure handleEdit is called
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ürünü Sil</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bu ürünü silmek istediğinize emin misiniz?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>İptal</Button>
          <Button onClick={() => deleteProduct(selectedProduct._id).then(handleClose)}>Sil</Button>
        </DialogActions>
      </Dialog>
      {editMode && selectedProduct && (
        <EditProductForm product={selectedProduct} onClose={handleEditClose} />
      )}
    </div>
  );
};
