import { Outlet } from "react-router-dom"
import { MainHeader } from "./header.js"
import { Footer } from "../footer/footer.js"


export const MainLayout = () => {
    return(
        <>
            <MainHeader/>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}