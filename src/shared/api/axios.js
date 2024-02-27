import axios from 'axios'

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const instance = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:8000'
})

export default instance