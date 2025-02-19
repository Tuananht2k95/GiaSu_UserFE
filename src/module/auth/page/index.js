import { useState } from "react"
import { Login } from "../../../component/layout/auth/login/login.js"
import { Register } from "../../../component/layout/auth/register/regiter.js"
import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"
import './index.scss'

export function Index() {
    const [isLogin, setIsLogin] = useState(true);
    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    }
    return(
        <>
            <Container id="authContainer">
                <Container id="formContainer" className="text-center" key={isLogin ? 'login' : 'register'}>
                    {
                        isLogin ? <Login/> : <Register/>
                    }
                    <Button id="toggleButton" className="mx-auto" onClick={toggleAuthMode}>
                        {
                            isLogin ? "Đăng ký" : "Đăng nhập"
                        }
                    </Button>
                </Container>
            </Container>
        </>
    )
}
