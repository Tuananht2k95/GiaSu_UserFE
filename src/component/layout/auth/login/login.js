import { useForm } from "react-hook-form"
import { Button, Container } from "react-bootstrap";
import { authApi } from "../../../../api/GiaSuUserService/auth";
import { useCookies } from "react-cookie";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import './login.scss'

export function Login() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [cookies, setCookie] = useCookies('user_token');
    const navigate = useNavigate()
    const login = async (data) => {
        try {
            const res = await authApi.login(data);

            if (res.success) {
                setCookie('user_token', res.data, {
                    path: '/',
                    expires: moment().add(7, "days").toDate()
                });
                navigate('/profile');
            } else {
                toast(res.message, {
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  }
                );
            };
        } catch (error) {
            toast(error);
        }
    };

    return ( 
        <Container className="d-flex justify-content-center">
            <form id="loginForm" className="col-6" onSubmit={(handleSubmit(login))}>
                <h3 className="mb-3 loginTitle">Đăng nhập</h3>
                <section className="position-relative d-flex justify-content-center">
                    {/* <label htmlFor="email" className="col-4">Email:</label> */}
                    <input  
                        className="inputLogin"
                        type="text" 
                        placeholder="Email..." 
                        {...register("email", { 
                            required: 'Email is required',
                        })}
                    />
                    {errors.email && <p className="loginText mb-0 position-absolute top-100 start-50 translate-middle">{errors.email.message}</p>}
                </section>
                <br></br>
                <section className="position-relative d-flex justify-content-center mb-5">
                    {/* <label htmlFor="password" className="col-4">Password:</label> */}
                    <input 
                        className="inputLogin"
                        type="password" 
                        placeholder="Password..." 
                        {...register("password", { 
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters'
                            },
                            maxLength: {
                                value: 20,
                                message: 'Password must be at most 20 characters'
                            }
                        })}
                    />
                    {errors.password && <p className="loginText mb-0 position-absolute top-100 start-50 translate-middle">{errors.password.message}</p>}
                </section>
                <br></br>
                <Button className="submitButton" type="submit" variant="secondary">Đăng nhập</Button>
            </form>
            <ToastContainer></ToastContainer>
        </Container>
    )
}
