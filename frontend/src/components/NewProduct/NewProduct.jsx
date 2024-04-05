import * as React from 'react';
import Textarea from '@mui/joy/Textarea';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const currencies = [
    {
        value: 'Icecekler',
        label: 'Icecekler',
    },
    {
        value: 'Yiyecekler',
        label: 'Yiyecekler',
    },
    {
        value: 'Tatlilar',
        label: 'Tatlilar',
    },
    {
        value: 'Sicak Yemekler',
        label: 'Sicak Yemekler',
    }, {
        value: 'Kahvalti Menusu',
        label: 'Kahvalti Menusu',
    },
];

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



export const NewProduct = () => {
    return (
        <>
            <h3 className='text-2xl mb-10 '>Ürün ekle</h3>
            <div className='grid grid-cols-2 gap-2 gap-y-4'>

                <TextField
                    required
                    id="outlined-required"
                    label="Ürün Adı"
                    placeholder="Lazanya" 
                />
                <TextField
                    required
                    id="outlined-select-currency"
                    select
                    label="Kategori"
                    defaultValue="Yiyecekler"
>
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-number"
                    label="Stok adedi"
                    type="number"
                    defaultValue={1}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    color='success'
                >
                    Ürün fotoğrafı
                    <VisuallyHiddenInput type="file" />
                </Button>
                <Textarea
                    disabled={false}
                    minRows={2}
                    placeholder="Ürün açıklaması"
                    size="md"
                />
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    color='primary'
                >
                    Ürün Videosu
                    <VisuallyHiddenInput type="file" />
                </Button>
                <TextField
                    id="outlined-number"
                    label="Fiyatı"
                    type="number"
                    defaultValue={1}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

            </div>
            <Button sx={{
                marginTop: 5,
                background: "green",
                '&:hover': {
                    background: "darkgreen", // Change this to the color you want on hover
                },
            }} variant="contained">Yeni Ürün</Button>
        </>
    )
}
