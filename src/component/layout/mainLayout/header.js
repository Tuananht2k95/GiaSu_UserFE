import { Nav, Navbar, Container, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
    const menu1Items = [
        {
            link: "/", 
            title: 'Trang chủ',
        },
        {
            link: "/information",
            title: "Giới thiệu",
        },
        {
            link: "/service",
            title: "Dịch vụ",
        },
        {
            link: "/product",
            title: "Danh sách lớp mới",
        },
        {
            link: "/contact",
            title: "Liên hệ",
        }
    ];
    const menu2Items = [
        {   
            title: 'Dành cho gia sư',
            variant: 'secondary',
            href: '/auth'
        },
        {
            title: 'Đăng ký thuê gia sư',
            variant: 'warning',
            href: '/dang-ky-thue-gia-su'
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
                        menu2Items.map(
                            (item) => {
                                return(
                                    <Button variant={item.variant} className="m-1" key={item.title}>
                                        <Navbar.Text>
                                            <a href={item.href}>{item.title}</a>
                                        </Navbar.Text>
                                    </Button>
                                )
                            }
                        )
                    }
                </Nav>
            </Container>
            <Container className="bg-light p-0">
                <ListGroup className="d-flex flex-row justify-content-start">
                    {
                        menu1Items.map(
                            (item) => {
                                return(
                                    <ListGroup.Item key={item.title}>
                                        <Link to={item.link}>{item.title}</Link>
                                    </ListGroup.Item>
                                )
                            }
                        )
                    }
                </ListGroup>
            </Container>
        </Navbar>
    )
}