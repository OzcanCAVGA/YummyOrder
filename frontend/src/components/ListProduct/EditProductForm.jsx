import React, { useState } from 'react';
import { Formik } from 'formik'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MenuItem, Typography } from '@mui/material';


export const EditProductForm = ({ open, onClose, name, description, category, price }) => {


    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth maxWidth={"sm"}
        >
            <Formik
                initialValues={
                    {
                        name,
                        description,
                        category,
                        price
                    }
                }
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <DialogTitle>Ürün Düzenle</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                            </DialogContentText>
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
                                value={props.values.name}
                                onChange={props.handleChange}
                                handleBlur={props.handleBlur}
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="description"
                                name="description"
                                label="Ürün açıklaması"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={props.values.description}
                                onChange={props.handleChange}
                                handleBlur={props.handleBlur}
                            />
                            <TextField
                                autoFocus
                                required
                                select
                                margin="dense"
                                id="category"
                                name="category"
                                label="Ürün kategorisi"
                                type="category"
                                fullWidth
                                variant="standard"
                                value={props.values.category}
                                onChange={props.handleChange}
                                handleBlur={props.handleBlur}
                            >
                                <MenuItem value="Icecekler">Icecekler</MenuItem>
                                <MenuItem value="Yiyecekler">Yiyecekler</MenuItem>
                                <MenuItem value="Tatlilar">Tatlilar</MenuItem>
                                <MenuItem value="Sicak Yemekler">Sicak Yemekler</MenuItem>
                                <MenuItem value="Kahvalti Menusu">Kahvalti Menusu</MenuItem>
                            </TextField>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="price"
                                name="price"
                                label="Ürün fiyatı"
                                type="number"
                                fullWidth
                                variant="standard"
                                value={props.values.price}
                                onChange={props.handleChange}
                                handleBlur={props.handleBlur}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button
                                variant='contained'
                                color='success'
                                size='large'
                                sx={{ width: "100%", textTransform: 'none' }}
                                type='submit'
                            >
                                <Typography sx={{ fontWeight: "bold" }}>Güncelle</Typography>
                            </Button>
                        </DialogActions>
                    </form>
                )}
            </Formik>

        </Dialog >
    )
}
