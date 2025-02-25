import { ProfileHeader } from "./header/header";
import { Footer } from "../footer/footer";
import { Outlet } from "react-router-dom";

export const ProfileLayout = () => {
    return(
        <>
            <ProfileHeader/>
            <Outlet></Outlet>
            <Footer/>
        </>
    )
}