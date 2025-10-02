import baseAxios from "../../ultis/axios";

const baseRoute = '/auth'
export const authApi = {
    login: (data) => {
        return baseAxios.post(baseRoute + '/login', data)
    },
    register: (data) => {
        return baseAxios.post(baseRoute + '/register', data)
    },
    resetPassword: (data) => {
        return baseAxios.post(baseRoute + '/resetPassword', data)
    }
}