import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { ChangePassword } from './ChangePassword';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export const AccountSettings = () => {

    const [editOpen, setEditOpen] = useState(false)

    const handleEditOpen = () => {
        setEditOpen(true)
    }

    const handleEditClose = () => {
        setEditOpen(false)
    }

    return (
        <>
            <h3 className='text-2xl mb-10'>Kullanıcı Bilgileri</h3>
            <div className='grid grid-cols-2 gap-2 gap-y-4'>
                <TextField
                    required
                    id="outlined-required"
                    label="İsim"
                    placeholder="Şener"
                    defaultValue="Kullanici Ismi"
                    sx={{ background: "white" }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Soyisim"
                    placeholder="Şen"
                    defaultValue="Kullanici Soyadi"
                    sx={{ background: "white" }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    placeholder="ornek@mail.com"
                    type="email"
                    sx={{ background: "white" }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Telefon Numarası"
                    placeholder="05555555555"
                    type="tel"
                    sx={{ background: "white" }}
                />

            </div >

            <Grid container spacing={2} justifyContent="space-between">

                <Grid item>
                    <IconButton onClick={handleEditOpen}>
                        <Button variant="contained" startIcon={<EditIcon />}
                            sx={{ fontWeight: 600 }}
                        >
                            Şifreyi Değiştir
                        </Button>
                    </IconButton>
                    <ChangePassword
                        open={editOpen}
                        onClose={handleEditClose}
                        oldPassword={"eskiSifre"} />
                </Grid>

                <Grid item>
                    <IconButton >
                        <Button variant="contained" startIcon={<EditIcon />}
                            sx={{ fontWeight: 600, backgroundColor: "green" }}
                        >
                            Kaydet
                        </Button>
                    </IconButton>
                </Grid>

            </Grid>

        </>
    )
}
