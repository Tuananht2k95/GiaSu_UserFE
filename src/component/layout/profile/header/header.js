import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { useCookies } from "react-cookie"
import { Link } from "react-router-dom"

export const ProfileHeader = () => {
    const removeCookie = useCookies('user_token')[2];
    const logout = () => {
        removeCookie('user_token');
        window.location.href = '/auth' 
    };

    return(
        <>
            <Navbar className="d-flex flex-column p-0">
            <Container className="d-flex justify-content-between bg-dark">
                <Nav className="">
                    <a href="/">
                        <Navbar.Brand>
                            <img src="/images/growgreen-logo.jpg" alt="Gia Su"></img>
                        </Navbar.Brand>
                        <span className="fw-bold">Gia Sư</span>
                    </a>
                </Nav>
                <Nav>
                    <Button variant="secondary" className="m-1">
                        <Navbar.Text>
                            <Link to='/profile'>Quản lý tài khoản</Link>
                        </Navbar.Text>
                    </Button>
                    <Button variant="warning" onClick={logout}>
                        <Navbar.Text>
                            Đăng xuất
                        </Navbar.Text>
                    </Button>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}