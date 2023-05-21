import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http://192.168.2.204:3333',
  baseURL: 'http://192.168.0.111:3333',
})
