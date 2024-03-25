import React from 'react'
import { Formik } from 'formik'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';


export const EditWaiterForm = ({ open, onClose, firstName, lastName, phone, email }) => {

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth={"sm"}>
            <Formik
                initialValues={{ firstName, lastName, phone, email }}

            >
                {(props) => (
                    <form onSubmit={props.handleSubmit}>
                        <DialogTitle>Garson Düzenle</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="firstName"
                                name="firstName"
                                label="Garson adı"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={props.values.firstName}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="lastName"
                                name="lastName"
                                label="Garson Soyadı"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={props.values.lastName}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="phone"
                                name="phone"
                                label="Garson telefon numarası"
                                type="tel"
                                fullWidth
                                variant="standard"
                                value={props.values.phone}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                            />

                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="email"
                                name="email"
                                label="Garson telefon numarası"
                                type="email"
                                fullWidth
                                variant="standard"
                                value={props.values.email}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
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
        </Dialog>
    )
}
