import { createBrowserRouter } from "react-router-dom";
import { LayoutPage } from "../component/layout/mainLayout/index.js";
import { dashboardRoute } from "../module/dashboard/route.js";
import { authRoute } from "../module/auth/route.js";

export  const router = createBrowserRouter(
    [
        {
            path: "",
            element: <LayoutPage></LayoutPage>,
            children: [
                dashboardRoute
            ]
        }, 
        {
            path: "/auth",
            children: [
                authRoute
            ]
        }
    ]
);
