import { ResetPassword } from "./page/resetPassword.js";
import { LoginPage } from "./page/login.js";
import { RegisterPage } from "./page/regiter.js";

export const authRoute = [
    {
        path: '/auth/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/auth/register',
        element: <RegisterPage></RegisterPage>
    },
    {
        path: '/auth/ResetPassword',
        element: <ResetPassword></ResetPassword>
    }
];