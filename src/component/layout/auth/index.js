import { AuthHeader } from "./header/header";
import { Footer } from "../footer/footer";
import { Outlet, useNavigate } from "react-router-dom";
import "./index.scss"
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { Cookies } from "react-cookie";

export const AuthLayout= () => {
    const cookies = new Cookies();
    const navigate = new useNavigate();

    useEffect(
        () => {
            if (cookies.get('user_token')) {
                navigate('/profile');
            }
        }
    )

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
