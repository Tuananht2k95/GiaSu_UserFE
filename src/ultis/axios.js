import axios from "axios";

const STATUS_SUCCESS = [200,201]
const baseAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_BE,
    headers: {
        'Content-Type': 'application/json'
    }
})
baseAxios.interceptors.response.use(
    (response) => {
        const statusCode = response.status
        if (STATUS_SUCCESS.includes(statusCode)) {
            return {
                success: true,
                time_current: response.data.now,
                data: response.data.data,
                message: response.data.message
            }
        }

        return{
            success: false,
            data: []
        }
    },
    (error) => {
        if (error.response) {            
            const response = error.response

            return{
                success: false,
                data: response.data.data,
                message: response.data.message,
                error: response.data.error,
            }
        }   
    }
)

export default baseAxios;