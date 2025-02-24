import { Outlet } from "react-router-dom"
import { MainHeader } from "./header/header.js"
import { Footer } from "../footer/footer.js"
import { Container } from "react-bootstrap"


export const MainLayout = () => {
    return(
        <Container>
            <MainHeader/>
            <Outlet></Outlet>
            <Footer></Footer>
        </Container>
    )
}