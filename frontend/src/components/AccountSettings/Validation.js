import * as Yup from 'yup';

const validationSchema = Yup.object({
    firstName: Yup.string()
        .required('Adınız gereklidir')
        .min(2, 'Adınız en az 2 karakter olmalıdır'),
    lastName: Yup.string()
        .required('Soyadınız gereklidir')
        .min(2, 'Soyadınız en az 2 karakter olmalıdır'),
    email: Yup.string()
        .required('Email adresi gereklidir')
        .email('Geçerli bir email adresi giriniz'),

    phoneNumber: Yup.string()
        .required('Telefon numarası gereklidir')
});

const changePasswordValidationSchema = Yup.object({
    currentPassword: Yup.string().required('Eski şifre gereklidir.'),
    newPassword: Yup.string()
        .min(6, 'Yeni şifre en az 6 karakter olmalıdır.')
        .required('Yeni şifre gereklidir.'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Şifreler eşleşmiyor')
        .required('Şifre tekrarı gereklidir.')
})


export {
    validationSchema,
    changePasswordValidationSchema
};
