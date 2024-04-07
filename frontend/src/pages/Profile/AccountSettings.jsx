import React from 'react'
import Textarea from '@mui/joy/Textarea';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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
    return (
        // Hesap ayarlari kismini tamamla
        <>
            <h3 className='text-2xl mb-10'>Kullanıcı Bilgileri</h3>
            <div className='grid grid-cols-2 gap-2 gap-y-4'>
                <TextField
                    required
                    id="outlined-required"
                    label="İsim"
                    placeholder="Şener"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Soyisim"
                    placeholder="Şen"
                />
            </div>
        </>
    )
}
