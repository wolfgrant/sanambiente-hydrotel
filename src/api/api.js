import axios from 'axios'
import { apiBaseUrl } from '../configs/config'

const api = axios.create( {
    baseURL: apiBaseUrl
})

export default api;