import axios from 'axios'

const API_URL = '/users'

const signup = async (userData) => {
    const res = await axios.post(`${API_URL}/signup`, userData)

    if(res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }
    
    return res.data
}
const signin = async (userData) => {
    const res = await axios.post(`${API_URL}/signin`, userData)

    if(res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }
    
    return res.data
}
const logout = async (userData) => {
    localStorage.removeItem('user')
}

const authService = {
    signup, signin, logout
}

export default authService