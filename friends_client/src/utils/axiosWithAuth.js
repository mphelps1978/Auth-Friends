import axios from 'axios'

export const axiosWithAuth = () => {
  return axios.create({
      // config object
      baseURL: 'http://localhost:5000',
      headers: {
        authentication: localStorage.getItem('token')
      }
  });
}