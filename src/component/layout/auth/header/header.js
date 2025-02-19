import { Navbar, Container, Nav } from "react-bootstrap"
import "./header.scss"

export const AuthHeader = () => {
    return(
        <Navbar className="d-flex flex-column p-0">
            <Container className="d-flex justify-content-between">
                <Nav className="">
                    <a href="/" className="">
                        <img className="rounded-circle d-inline-block align-text-center" src="/images/growgreen-logo.jpg" alt="Gia Su"></img>
                        Gia sư
                    </a>
                </Nav>
            </Container>
        </Navbar>
    )
}