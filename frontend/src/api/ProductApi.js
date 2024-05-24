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
    const { data } = await axios.get('http://localhost:8080/api/v1/admin/orders/view')
    return data;
}

export{
    getAllProducts,
}