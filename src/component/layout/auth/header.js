import { Navbar, Container, Nav, Button } from "react-bootstrap"

export const AuthHeader = () => {
    const buttonItems = [
        {   
            title: 'Đăng nhập',
            variant: 'secondary'
        },
        {
            title: 'Đăng ký tài khoản mới',
            variant: 'warning'
        }
    ]
    return(
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
                    {
                        buttonItems.map(
                            (item) => {
                                return(
                                    <Button variant={item.variant} className="m-1">
                                        <Navbar.Text>
                                            {item.title}
                                        </Navbar.Text>
                                    </Button>
                                )
                            }
                        )
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}