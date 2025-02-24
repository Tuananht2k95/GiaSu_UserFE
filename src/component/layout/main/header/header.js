import { Nav, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './header.scss'
import { Logo } from "../../logo/logo";

export const MainHeader = () => {
    const menuItems = [
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
    const menuButton = [
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
        <nav className="navMain">
            <section className="headerSection">
                <Logo />
                <Nav className="menuButtons">
                    {
                        menuButton.map(
                            (item) => {
                                return(
                                    <Link to={item.href}>
                                        <Button variant={item.variant} className="m-1" key={item.title}>
                                            {item.title}
                                        </Button>
                                    </Link>
                                )
                            }
                        )
                    }
                </Nav>
            </section>
            <section className="headerSection">
                <ListGroup className="">
                    {
                        menuItems.map(
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
            </section>
        </nav>
    )
}