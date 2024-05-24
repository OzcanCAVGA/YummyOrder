import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required("Email adresi gereklidir.")
        .email("Geçerli bir email adresi giriniz"),
    password: Yup.string()
        .required("Şifre gereklidir")
        .min(8, "Şifreniz en az 8 karakter olmalıdır.")
})

export default validationSchema;
