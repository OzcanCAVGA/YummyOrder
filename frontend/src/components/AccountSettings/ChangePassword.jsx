import React, { useState } from 'react'
import { Field, Form, Formik, useFormik } from 'formik';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { changePasswordValidationSchema } from './Validation';
import { useAuth } from '../../contexts/AuthContext';
import { updatePassword } from '../../api/UserApi';
export const ChangePassword = ({ open, onClose}) => {
    const { user, Logout } = useAuth()
    const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
        useFormik({
            initialValues: {
                oldPassword: "",
                newPassword: "",
                confirmPassword: ""
            },
            onSubmit: async (values, bag) => {
                try {
                    const response = await updatePassword(user._id, {
                        oldPassword: values.oldPassword,
                        newPassword: values.newPassword
                    })
                    onClose()
                    Logout();
                } catch (error) {
                    bag.setErrors({ general: error })
                }
            },
            validationSchema: changePasswordValidationSchema 
        })
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth maxWidth={"sm"}
        >
            <form onSubmit={handleSubmit}>
                <DialogTitle>Şifreyi Değiştir</DialogTitle>
                <DialogContent>
                    <Field
                        autoFocus
                        as={TextField}
                        required
                        margin="dense"
                        id="oldPassword"
                        name="oldPassword"
                        label="Eski Şifre"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={values.oldPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.oldPassword && Boolean(errors.oldPassword)}
                        helperText={touched.oldPassword && errors.oldPassword}
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
                        value={values.newPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.newPassword && Boolean(errors.newPassword)}
                        helperText={touched.newPassword && errors.newPassword}
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
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                        helperText={touched.confirmPassword && errors.confirmPassword}
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
        </Dialog>
    )
}