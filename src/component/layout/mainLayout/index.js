import { Outlet } from "react-router-dom"
import { Header } from "./header.js"
import { Footer } from "./footer.js"


export const LayoutPage = () => {
    return(
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}