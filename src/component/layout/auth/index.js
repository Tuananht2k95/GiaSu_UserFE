import { AuthHeader } from "./header/header";
import { Footer } from "../footer/footer";
import { Outlet, useNavigate } from "react-router-dom";
import "./index.scss"
import { ToastContainer } from "react-toastify";
import { Cookies } from "react-cookie";
import { useEffect } from "react";

export const AuthLayout= () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const userToken = cookies.get('user_token');
    
    useEffect(
        () => {
            if ( userToken ) {
                navigate("/profile")
            }
        }, []
    );

    return(
        <div id="authPage" className="position-realative">
            <AuthHeader/>
            <Outlet></Outlet>
            <div id="footerPage" className="position-absolute bottom-0">
                <Footer></Footer>
            </div>
            <ToastContainer />
        </div>
    )
}
