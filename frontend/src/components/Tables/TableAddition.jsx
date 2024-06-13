import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { addTable } from '../../api/TableApi';

export const TableAddition = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            tableNumber: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Masa Adı gereklidir'),
            tableNumber: Yup.number()
                .required('Masa Numarası gereklidir')
                .typeError('Masa Numarası sayı olmalıdır'),
        }),
        onSubmit: async (values, { setSubmitting }) => {
            try {
                await addTable(values);
                alert('Masa başarıyla eklendi');
            } catch (error) {
                alert('Masa eklenirken bir hata oluştu');
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div className=''>
            <h3 className='text-2xl mb-10 '>Masa ekle</h3>
            <form onSubmit={formik.handleSubmit} className='grid grid-rows-2 '>
                <TextField
                    required
                    id="name"
                    name="name"
                    label="Masa Adı"
                    type='text'
                    placeholder="İlber Ortaylı"
                    sx={{ width: '30vw' }}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    required
                    id="tableNumber"
                    name='tableNumber'
                    label="Masa Numarası"
                    placeholder="1"
                    sx={{ width: '30vw' }}
                    value={formik.values.tableNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.tableNumber && Boolean(formik.errors.tableNumber)}
                    helperText={formik.touched.tableNumber && formik.errors.tableNumber}
                />
                <Button
                    type="submit"
                    sx={{
                        marginTop: 5,
                        background: "green",
                        '&:hover': {
                            background: "darkgreen",
                        },
                        width: 150
                    }}
                    variant="contained"
                    disabled={formik.isSubmitting}
                >
                    Masa Ekle
                </Button>
            </form>
        </div>
    );
};
