import * as yup from 'yup';

const validations = yup.object().shape({
    name: yup.string()
        .required('Ürün adı gereklidir.'),
    description: yup.string()
        .required('Açıklama gereklidir.')
        .min(10, 'Açıklama en az 10 karakter olmalıdır.')
        .max(500, 'Açıklama en fazla 500 karakter olmamalıdır.'),
    category: yup.string()
        .required('Kategori gereklidir.')
        .oneOf(['Icecekler', 'Yiyecekler', 'Tatlilar', 'Sicak Yemekler', 'Kahvalti Menusu'], 'Geçerli kategoriler arasından biri seçilmelidir.'),
    price: yup.number()
        .required('Fiyat gereklidir.')
        .positive('Fiyat pozitif bir sayı olmalıdır.')
        .integer('Fiyat tam bir sayı olmalıdır.'),
});

export default validations;