import axios from "axios"

const apiClient = axios.create({
    baseURL: "http://localhost:4500/api",
    headers: {
        "Content-type": "application/json",
    },
})
export default apiClient
