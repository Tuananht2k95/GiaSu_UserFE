import { Outlet } from "react-router-dom"

export const Layout = () => {
    return(
        <>
            <header>
                <div className="logo">
                    <img src="">
                    </img>
                </div>
            </header>
            <Outlet>
            </Outlet>
            <footer>
                <div>Something</div>
            </footer>
        </>
    )
}