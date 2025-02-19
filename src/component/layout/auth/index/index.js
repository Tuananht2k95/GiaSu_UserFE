import { AuthHeader } from "../header/header";
import { Footer } from "../../footer/footer";
import { Outlet } from "react-router-dom";
import "./index.scss"

export const AuthLayout= () => {
    return(
        <div id="authPage" className="position-realative">
            <AuthHeader/>
            <Outlet></Outlet>
            <div id="footerPage" className="position-absolute bottom-0">
                <Footer></Footer>
            </div>
        </div>
    )
}
