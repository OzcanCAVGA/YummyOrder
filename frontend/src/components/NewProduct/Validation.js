import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Ürün Adı gerekli"),
    description: Yup.string().required('Ürün açıklaması gerekli'),
    category: Yup.string().required('Kategori gerekli'),
    images: Yup.string().required('Ürün fotoğrafı gerekli'),
    price: Yup.number().min(1, 'Fiyat en az 1 olmalı').required('Fiyat gerekli'),
})
export default validationSchema;