import { ProfileHeader } from "./header/header";
import { Footer } from "../footer/footer";
import { Outlet, useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { useEffect } from "react";


export const ProfileLayout = () => {
    const cookies= new Cookies();
    const navigate = useNavigate();
    const userToken = cookies.get('user_token');
    useEffect(
        () => {
            if (!userToken) {
                navigate("/auth")
            }
        }, []
    );
    
    return(
        <>
            <ProfileHeader/>
            <Outlet></Outlet>
            <Footer/>
        </>
    )
}