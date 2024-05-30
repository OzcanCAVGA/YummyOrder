import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import {ChangePassword} from './ChangePassword';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useAuth } from '../../contexts/AuthContext';
import { useQuery, useQueryClient } from 'react-query';
import { getUser, updateUser } from '../../api/UserApi';
import { Formik } from 'formik';
import { validationSchema } from './Validation';

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
  const { user } = useAuth();

  const [editOpen, setEditOpen] = useState(false);

  const handleEditOpen = () => {
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(['user', user._id], () => getUser(user._id));

  if (isLoading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Formik
        initialValues={{
          firstName: data.data.firstName,
          lastName: data.data.lastName,
          email: data.data.email,
          phoneNumber: data.data.phoneNumber,
        }}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            const response = await updateUser(user._id, values);
            if (response.status === 200) {
              alert('Kullanici bilgileri basariyla guncellendi')
              queryClient.invalidateQueries('user')
            } else {
              throw new Error('Guncelleme basarisiz')
            }
          } catch (error) {
            setErrors({ general: error.message });

          } finally {
            setSubmitting(false);
          }
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <h3 className='text-2xl mb-10'>Kullanıcı Bilgileri</h3>
            <div className='grid grid-cols-2 gap-2 gap-y-4'>
              <TextField
                required
                id="firstName"
                label="İsim"
                name="firstName"
                placeholder="Şener"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.firstName && touched.firstName)}
                helperText={errors.firstName && touched.firstName && errors.firstName}
                sx={{ background: "white" }}
              />
              <TextField
                required
                id="lastName"
                label="Soyisim"
                name="lastName"
                placeholder="Şen"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.lastName && touched.lastName)}
                helperText={errors.lastName && touched.lastName && errors.lastName}
                sx={{ background: "white" }}
              />
              <TextField
                required
                id="email"
                label="Email"
                name="email"
                placeholder="ornek@mail.com"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.email && touched.email)}
                helperText={errors.email && touched.email && errors.email}
                sx={{ background: "white" }}
              />
              <TextField
                required
                id="phoneNumber"
                label="Telefon Numarası"
                name="phoneNumber"
                placeholder="05555555555"
                type="tel"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(errors.phoneNumber && touched.phoneNumber)}
                helperText={errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                sx={{ background: "white" }}
              />
            </div>

            <Grid container spacing={2} justifyContent="space-between">
              <Grid item>
                <IconButton onClick={handleEditOpen}>
                  <Button variant="contained" startIcon={<EditIcon />} sx={{ fontWeight: 600 }}>
                    Şifreyi Değiştir
                  </Button>
                </IconButton>
                <ChangePassword open={editOpen} onClose={handleEditClose} />
              </Grid>

              <Grid item>
                <Button type="submit" variant="contained" startIcon={<EditIcon />} sx={{ fontWeight: 600, backgroundColor: "green" }}>
                  Kaydet
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik >
    </>
  );
}


