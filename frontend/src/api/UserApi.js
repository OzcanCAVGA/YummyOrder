import axios from 'axios';
const setAuth = () => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        }
    }
    return config
}

const loginIn = async (input) => {
    const response = await axios.post('http://localhost:8080/api/v1/login', input);
    return response
}

export {
    loginIn,
}