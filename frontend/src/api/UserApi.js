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

const signUp = async (input) => {
    const response = await axios.post("http://localhost:8080/api/v1/signup", input);
    return response
}

const loggedInUser = async () => {
    const response = await axios.get('http://localhost:8080/api/v1/loggedInUser', setAuth())
    return response;
}


const getUser = async (id) => {
    const response = await axios.get(`http://localhost:8080/api/v1/users/${id}`, setAuth())
    return response
}

const updateUser = async(id, input)=>{
    const response = await axios.put(`http://localhost:8080/api/v1/users/${id}`, input, setAuth())
    return response
}

const updatePassword = async (id,input) => {
    const response = await axios.put(`http://localhost:8080/api/v1/users/password/${id}`, input, setAuth());
    return response;
}

export {
    loginIn,
    signUp,
    getUser,
    loggedInUser,
    updateUser,
    updatePassword,

}