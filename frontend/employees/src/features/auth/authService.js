import axios from 'axios'

const API_URL = '/api/user/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'registerUsers', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Get all user
const getalluser = async (userData) => {
  const response = await axios.get(API_URL + 'allUsers')

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// // Logout user
// const logout = () => {
//   localStorage.removeItem('user')
// }

const authService = {
  register,
  getalluser
}

export default authService