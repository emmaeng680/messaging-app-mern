import axios from 'axios'
const instance = axios.create({
    baseURL: "https://messaging-app-backend-xcn7.onrender.com"
})
export default instance