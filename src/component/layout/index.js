import { Outlet } from "react-router-dom"
import { Header } from "./header.js"
import { Footer } from "./footer.js"
import React from "react";

export const Layout = () => {
    return(
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}