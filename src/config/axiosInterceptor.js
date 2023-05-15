import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8088/',
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (accesToken) {
      config.headers['Authorization'] = 'Bearer' + token

      return config
    }
  },
  (error) => {
    Promise.reject(error)
  }
);