import { ProfileHeader } from "./header/header";
import { Footer } from "../footer/footer";
import { Outlet, useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { useEffect } from "react";

export const ProfileLayout = () => {
    const cookies = new Cookies();
    const navigate = new useNavigate();

    useEffect(
        () => {
            if (!cookies.get('user_token')) {
                navigate('/auth')
            }
        }
    );
    
    return(
        <>
            <ProfileHeader/>
            <Outlet></Outlet>
            <Footer/>
        </>
    )
}