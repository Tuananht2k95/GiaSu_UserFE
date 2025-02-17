import { AuthHeader } from "./header";
import { Footer } from "../footer/footer";
import { Outlet } from "react-router-dom";

export const AuthLayout= () => {
    return(
        <>
            <AuthHeader/>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
