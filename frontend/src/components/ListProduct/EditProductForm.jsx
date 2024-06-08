import React from 'react';
import { Formik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { MenuItem, Typography } from '@mui/material';
import { useQueryClient } from 'react-query';
import { updateProduct } from '../../api/ProductApi';
import validations from './Validation';

export const EditProductForm = ({ open, onClose, productId, name, description, category, price }) => {
    const queryClient = useQueryClient();

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <Formik
                initialValues={{ name, description, category, price }}
                validationSchema={validations}
                onSubmit={async (values, { setErrors }) => {
                    try {
                        await updateProduct(productId, values);
                        queryClient.invalidateQueries(['products']);
                        onClose();
                    } catch (error) {
                        setErrors({ general: error.response.data.hata || error.message });
                        console.log("Error updating product:", error);
                    }
                }}
            >
                {({ handleSubmit, handleBlur, handleChange, values, errors, touched }) => (
                    <form onSubmit={handleSubmit}>
                        <DialogTitle>Ürün Düzenle</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                name="name"
                                label="Ürün adı"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                            />
                            <TextField
                                required
                                margin="dense"
                                id="description"
                                name="description"
                                label="Ürün açıklaması"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.description && Boolean(errors.description)}
                                helperText={touched.description && errors.description}
                            />
                            <TextField
                                required
                                select
                                margin="dense"
                                id="category"
                                name="category"
                                label="Ürün kategorisi"
                                fullWidth
                                variant="standard"
                                value={values.category}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.category && Boolean(errors.category)}
                                helperText={touched.category && errors.category}
                            >
                                <MenuItem value="Icecekler">Icecekler</MenuItem>
                                <MenuItem value="Yiyecekler">Yiyecekler</MenuItem>
                                <MenuItem value="Tatlilar">Tatlilar</MenuItem>
                                <MenuItem value="Sicak Yemekler">Sicak Yemekler</MenuItem>
                                <MenuItem value="Kahvalti Menusu">Kahvalti Menusu</MenuItem>
                            </TextField>
                            <TextField
                                required
                                margin="dense"
                                id="price"
                                name="price"
                                label="Ürün fiyatı"
                                type="number"
                                fullWidth
                                variant="standard"
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.price && Boolean(errors.price)}
                                helperText={touched.price && errors.price}
                            />
                        </DialogContent>
                        {errors.general && (
                            <Typography color="error" align="center" sx={{ mt: 2 }}>
                                {errors.general}
                            </Typography>
                        )}
                        <DialogActions>
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                sx={{ width: "100%", textTransform: 'none' }}
                                type="submit"
                            >
                                <Typography sx={{ fontWeight: "bold" }}>Güncelle</Typography>
                            </Button>
                        </DialogActions>
                    </form>
                )}
            </Formik>
        </Dialog>
    );
}
