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
    const { data } = await axios.post(`http://localhost:8080/api/v1/admin/order/createorder`, input)
    return data;
}
export{
    addOrder
}