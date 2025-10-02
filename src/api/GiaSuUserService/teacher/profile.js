import baseAxios from "../../../ultis/axios.js"
import { getUserTokenFromCookies } from "../../../helper/helper.js"

const baseUrl = '/profile'
export const profileTeacherApi = {
    show: () => {
        return baseAxios( baseUrl, {
            headers: {
                Authorization: getUserTokenFromCookies(),
            }
        })
    }
}