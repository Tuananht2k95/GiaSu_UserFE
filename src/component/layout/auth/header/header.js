import { Nav } from "react-bootstrap"
import { Logo } from "../../logo/logo"
import "./header.scss"

export const AuthHeader = () => {
    return(
        <Nav className="authHeader">
            <Logo />
        </Nav>
    )
}