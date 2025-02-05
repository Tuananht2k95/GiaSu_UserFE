import React from "react"
import { Layout } from "../component/layout"

export const userRouter = {
    path: '',
    element: <Layout />,
    children: [
        {
            index: true,
            // element: <Menu></Menu>,
        }
    ]
}