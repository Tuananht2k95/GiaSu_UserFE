import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../component/layout/main/index.js";
import { mainRoute } from "../module/main/route.js";
import { authRoute } from "../module/auth/route.js";
import { profileRoute } from "../module/profile/route.js";
import { AuthLayout } from "../component/layout/auth/index.js";
import { ProfileLayout } from "../component/layout/profile/index.js";

export  const router = createBrowserRouter(
    [
        {
            path: "",
            element: <MainLayout/>,
            children: [
                mainRoute
            ]
        }, 
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: authRoute
        },
        {
            path: "/profile",
            element: <ProfileLayout/>,
            children: [
                profileRoute
            ]
        }
    ]
);
