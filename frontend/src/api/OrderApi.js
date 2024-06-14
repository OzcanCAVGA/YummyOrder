import axios from "axios";
const setAuth = () => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        }
    };
    return config
}
// http://localhost:8080/api/v1/admin/order/createorder
const addOrder = async (input) => {
    const { data } = await axios.post(`http://localhost:8080/api/v1/admin/order/createorder`, input, setAuth())
    return data;
}

const getOrder = async () => {
    const { data } = await axios.get('http://localhost:8080/api/v1/order/getOrder', setAuth())
    return data;
}



export {
    addOrder,
    getOrder
}