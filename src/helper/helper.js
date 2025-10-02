import { Cookies } from "react-cookie"

export const getUserTokenFromCookies = () => {
    const cookies = new Cookies();
        
    return(cookies.get("user_token"))
}