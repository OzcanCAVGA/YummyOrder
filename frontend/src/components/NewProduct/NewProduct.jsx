import React from 'react';
import { Formik } from 'formik';
import Textarea from '@mui/joy/Textarea';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { addProduct } from '../../api/ProductApi';
import validations from './Validation';
import Message from '../Message/Message';
const categories = [
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
    },
    {
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

function NewProduct() {
    return (
        <Formik
            initialValues={{
                name: '',
                description: '',
                category: 'Yiyecekler',
                price: null,
                images: ''
            }}

            onSubmit={(values, { setSubmitting, setErrors, setStatus }) => {
                console.log("NewProductSubmittingteyim:::", values)
                addProduct(values)
                    .then((response) => {
                        console.log(response.data, '--> veri tabanina eklendi');
                        setStatus('success');
                    })
                    .catch((error) => {
                        if (error.response && error.response.data) {
                            setErrors({ general: error.response.data });
                        } else {
                            console.log(error);
                        }
                    })
                    .finally(() => {
                        setSubmitting(false);
                    });
            }}
            validationSchema={validations}
        >
            {({ handleSubmit, handleBlur, handleChange, values, errors, touched, status }) => (
                <form onSubmit={handleSubmit}>
                    <h3 className='text-2xl mb-10'>Ürün ekle</h3>
                    {status === 'success' && <Message mesaj={"Ürün başarıyla eklendi"}/>}
                    <div className='grid grid-cols-2 gap-2 gap-y-4'>
                        <TextField
                            required
                            id="name"
                            name='name'
                            error={Boolean(errors.name && touched.name)}
                            label="Ürün Adı"
                            placeholder="Lazanya"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <Textarea
                            id='description'
                            name='description'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            minRows={2}
                            placeholder="Ürün açıklaması"
                            size="md"
                        />
                        <TextField
                            required
                            id="category"
                            name='category'
                            select
                            label="Kategori"
                            value={values.category}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            {categories.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            required
                            id='images'
                            name='images'
                            label="Fotoğraf Linki"
                            error={Boolean(errors.images && touched.images)}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.images}
                        />
                        <TextField
                            id="price"
                            name='price'
                            required
                            error={Boolean(errors.price && touched.price)}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Fiyatı"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={values.price}
                        />
                        <Button
                           variant="contained"
                           color="primary"
                           startIcon={<CloudUploadIcon />}
                            type="submit"
                        >
                            Ürün Ekle
                        </Button>
                    </div>
                    {errors.general && <div>{errors.general}</div>}
                </form>
            )}
        </Formik>
    );
};
export default NewProduct