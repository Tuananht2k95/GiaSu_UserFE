import baseAxios from "../../../ultis/axios";

const baseUrl = '/teacher/user'
export const userTeacherApi = {
    store: (data) => {
        return baseAxios.post(baseUrl, data)
    }
}