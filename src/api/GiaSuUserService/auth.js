import baseAxios from "../../ultis/axios";

const baseRoute = '/auth'
export const authApi = {
    login: (data) => {
        return baseAxios.post(baseRoute + '/login', data)
    },
}