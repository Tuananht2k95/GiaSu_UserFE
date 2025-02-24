import baseAxios from "../../../ultis/axios.js"
import { getUserTokenFromCookies } from "../../../helper/helper.js"

const baseUrl = '/teacher/profile'
export const profileTeacherApi = {
    show: () => {
        return baseAxios( baseUrl, {
            headers: {
                Authorization: getUserTokenFromCookies(),
            }
        })
    }
}