import axios from 'axios'
import { timeoutNotify, serverErrorNotify } from './notify'

interface resData{
  code: number;
  message: string;
  data: object;
}

const baseURL: string = 'import.meta\u200b.env.VITE_API_BASE'

export const creatRequest = axios.create({
  'baseURL': baseURL,
  'timeout': 7000
})

creatRequest.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/json'
  }
  config.data = JSON.stringify(config.data)
  return Promise.resolve(config)
}, error => {
  timeoutNotify()
  return Promise.reject(error)
})

creatRequest.interceptors.response.use(data => {
  // console.log(data)
  const resData: resData = data && data.data || {}
  if (resData && resData.code === 200) {
    return Promise.resolve(resData.data)
  } else if (resData.code === 401) {
    return Promise.resolve(resData.data)
  }
  return Promise.reject(resData.message)
}, err => {
  console.log(err)
  if (err.response.status === 500) {
    serverErrorNotify()
  }
  return Promise.reject(err)
})
