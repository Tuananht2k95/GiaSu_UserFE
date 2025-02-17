import { useState } from "react"
import { AuthHeader } from "../../../component/layout/auth/header.js"
import { Login } from "../../../component/layout/auth/login.js"
import { Register } from "../../../component/layout/auth/regiter.js"
import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"

export function Index() {
    const [isLogin, setIsLogin] = useState(true)
    const toggleAuthMode = () => {
        setIsLogin(!isLogin)
    }
    return(
        <>
            <AuthHeader></AuthHeader>
            <Container className="text-center my-5">
                {
                    isLogin ? <Login/> : <Register/>
                }
                <Button className="mx-auto" onClick={toggleAuthMode}>Click me to change</Button>
            </Container>
        </>
    )
}
