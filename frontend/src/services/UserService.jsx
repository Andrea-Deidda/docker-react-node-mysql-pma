import axios from "axios"
const baseUrl = 'http://localhost:3001/user'

const getAll = () => {
    return axios.get(`${baseUrl}/getAll`)
}

const addUser = (newUser) => {
    return axios.post(`${baseUrl}/signup`, newUser )
}

const exportedObject = {
    getAll,
    addUser
}

export default exportedObject