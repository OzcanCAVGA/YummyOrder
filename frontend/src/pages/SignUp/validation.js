import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('Adınız gereklidir')
        .min(2, 'Adınız en az 2 karakter olmalıdır'),
    lastName: Yup.string()
        .required('Soyadınız gereklidir')
        .min(2, 'Soyadınız en az 2 karakter olmalıdır'),
    email: Yup.string()
        .required('Email adresi gereklidir')
        .email('Geçerli bir email adresi giriniz'),
    password: Yup.string()
        .required('Şifre gereklidir')
        .min(8, 'Şifreniz en az 8 karakter olmalıdır'),
    phoneNumber: Yup.string()
        .required('Telefon numarası gereklidir')
    });
export default validationSchema