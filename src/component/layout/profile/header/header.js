import { Navbar, Nav, Button } from "react-bootstrap"
import { useCookies } from "react-cookie"
import { Link } from "react-router-dom"
import { Logo } from '../../logo/logo.js'

export const ProfileHeader = () => {
    const removeCookie = useCookies('user_token')[2];
    const logout = () => {
        removeCookie('user_token');
        window.location.href = '/auth' 
    };

    return(
        <>
            <nav className="navMain">
                <section className="headerSection">
                    <Logo />
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
                </section>
            </nav>
        </>
    )
}