import axios from 'axios';
const setAuth = () => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        }
    }
    return config
}
const addTable = async (input) => {
    const { data } = await axios.post(`http://localhost:8080/api/v1/admin/tables/addTable`, input, setAuth())
    return data;
}
export{
    addTable
}