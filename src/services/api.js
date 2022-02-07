import axios from 'axios'

function headerToken(token){
    return  { headers: {Authorization: `Bearer ${token}` } }
}

async function login(body){
    const loginResponse = await axios.post(`${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_PORT_NUMBER}/auth/login`, body)
    return loginResponse
}

async function signUp(body){
    const signupResponse = await axios.post(`${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_PORT_NUMBER}/auth/signup`, body)
    return signupResponse
}

async function getTransactions(token){
    const getResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_PORT_NUMBER}/transactions/all`, token)
    return getResponse
}

async function postTransaction(body, token){
    const postResponse = await axios.post(`${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_PORT_NUMBER}/transactions/new`, body, token)
    return postResponse
}

async function modTransaction(body, token){
    const modResponse = await axios.put(`${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_PORT_NUMBER}/transactions/mod`, body, token)
    return modResponse
}

async function deleteTransaction(body, token){
    const deleteResponse = await axios.delete(`${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_PORT_NUMBER}/transactions/del`, { ...token, data: {...body} })
    return deleteResponse
}

const api = {
    headerToken,
    login,
    signUp,
    getTransactions,
    postTransaction,
    modTransaction,
    deleteTransaction
}

export default api