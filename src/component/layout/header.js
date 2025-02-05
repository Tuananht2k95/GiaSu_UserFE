import React from "react";
import { Nav, Navbar, Container, ListGroup, Button } from "react-bootstrap";

export const Header = () => {
    return(
        <Navbar className="d-flex flex-column p-0">
            <Container className="d-flex justify-content-between bg-dark">
                <Nav className="logo">
                    <a href="/">
                        <span>
                            <img src="/asset/images/logo.png" alt="Gia Su"></img>
                        </span>
                        <span className="fw-bold">Gia Sư</span>
                    </a>
                </Nav>
                <Nav>
                    <Button variant="secondary" className="m-1">
                        <Navbar.Text>
                            <a href="/teacher">Dành cho gia sư</a>
                        </Navbar.Text>
                    </Button>
                    <Button variant="warning" className="m-1">
                        <Navbar.Text>
                            <a href="/dang-ky-thue-gia-su"> Đăng ký thuê gia sư</a>
                        </Navbar.Text>
                    </Button>
                </Nav>
            </Container>
            <Container className="bg-light p-0">
                <ListGroup className="d-flex flex-row justify-content-start">
                    <ListGroup.Item>
                        <a href="/">Trang chủ</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <a href="/information">Giới thiệu</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <a href="/service">Dịch vụ</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <a href="/product">Danh sách lớp mới</a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <a href="/contact">Liên hệ</a>
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </Navbar>
    )
}