import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8088/',
})

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken')
    console.log(accessToken)
    if (accessToken) {
      config.headers['Authorization'] = 'Bearer ' + accessToken

      return config
    }
  },
  (error) => {
    Promise.reject(error)
  }
);