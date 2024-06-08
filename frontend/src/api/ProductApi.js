import axios from "axios";
const setAuth = () => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        }
    };
    return config
}

const getAllProducts = async () => {
    const { data } = await axios.get('http://localhost:8080/api/v1/products')
    return data;
}

const getAllProductsAdmin = async () => {
    const { data } = await axios.get('http://localhost:8080/api/v1/admin/product-list', setAuth())
    return data
}

const getProduct = async (productid) => {
    const { data } = await axios.get(`http://localhost:8080/api/v1/products/product-detail/${productid}`);
    return data;

}

const updateProduct = async (productid, values) => {
    const { data } = await axios.put(`http://localhost:8080/api/v1/admin/products/${productid}`, values, setAuth());
    return data;
}
export {
    getAllProducts,
    getProduct,
    getAllProductsAdmin,
    updateProduct,
}