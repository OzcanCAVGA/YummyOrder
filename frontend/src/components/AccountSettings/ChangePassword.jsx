import React from 'react'
import { Field, Form, Formik } from 'formik';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
export const ChangePassword = ({ open, onClose, oldPassword }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth maxWidth={"sm"}>

            <Formik
                initialValues={
                    {
                        oldPassword: oldPassword,
                        newPassword: "",
                        confirmPassword: ""
                    }
                }
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <DialogTitle>Şifreyi Değiştir</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                            </DialogContentText>
                            <Field
                                autoFocus
                                as={TextField}
                                required
                                margin="dense"
                                id="currentPassword"
                                name="currentPassword"
                                label="Eski Şifre"
                                type="password"
                                fullWidth
                                variant="standard"
                                value={props.values.currentPassword}
                                onChange={props.handleChange}
                                handleBlur={props.handleBlur}
                            />
                            <Field
                                as={TextField}
                                required
                                margin="dense"
                                id="newPassword"
                                name="newPassword"
                                label="Yeni Şifre"
                                type="password"
                                fullWidth
                                variant="standard"
                            />
                            <Field
                                as={TextField}
                                required
                                margin="dense"
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Yeni Şifre Tekrar"
                                type="password"
                                fullWidth
                                variant="standard"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={onClose} color="primary">
                                İptal
                            </Button>
                            <Button type="submit" color="primary">
                                Gönder
                            </Button>
                        </DialogActions>
                    </form>
                )}
            </Formik>
        </Dialog>
    )
}
