import { useState } from "react"
import { Login } from "../../../component/layout/auth/login.js"
import { Register } from "../../../component/layout/auth/regiter.js"
import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"
import './index.scss'

export function Index() {
    const [isLogin, setIsLogin] = useState(true);
    const [key, setKey] = useState(0);
    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
        setKey(preKey => preKey +1);
        console.log(isLogin, key);
    }
    return(
        <>
            <div key={key}>
                <Container id="authPage" className="text-center my-5" key={isLogin ? 'login' : 'register'}>
                    {
                        isLogin ? <Login/> : <Register/>
                    }
                    <Button className="mx-auto" onClick={toggleAuthMode}>Click me to change</Button>
                </Container>
            </div>
        </>
    )
}
