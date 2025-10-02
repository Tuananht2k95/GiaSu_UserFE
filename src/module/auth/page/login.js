import { useForm } from "react-hook-form"
import { Button, Container } from "react-bootstrap";
import { useCookies } from "react-cookie";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { authApi } from "../../../api/GiaSuUserService/auth";
import './index.scss'

export function LoginPage() {
    const { register, handleSubmit, formState: {errors}, setError } = useForm();
    const setCookie = useCookies('user_token')[1];
    const navigate = useNavigate();
    const login = async (data) => {
        //fake data
        if (data.email === 'admin' && data.password === '123456') 
            {
                const resData = "eyJhbGdvcml0aG0iOiJzaGEyNTYiLCJ0eXBlIjoiSldUIn0.eyJfaWQiOiI2N2FkODBkZGJiNWZmMTc0MzhiODA5MDgiLCJpYXQiOjE3NTkzNzU0MjQsImV4cCI6MTc1OTk4MDIyNH0.dbf32b906e94375bb73bac23cc4e9fc55fe8d96d313a41cec4276f20aff4a409"
                setCookie('user_token', resData, {
                    path: '/',
                    expires: moment().add(7, "days").toDate()
                });
                navigate('/profile');
                return;
            }
        //
        try {
            const res = await authApi.login(data);

            if (res.errors) {
                for (const error of res.errors) {
                    setError(
                        error.key,
                        {
                            message: error.message
                        }
                    );
                }
            }

            if (res.success) {
                setCookie('user_token', res.data, {
                    path: '/',
                    expires: moment().add(7, "days").toDate()
                });
                navigate('/profile');
                return;
            }
    
        } catch (error) {
            toast(error);
        }
    };

    return ( 
        <Container className="authContainer">
            <form className="col-6" onSubmit={(handleSubmit(login))}>
                <h3 className="my-3">Đăng nhập</h3>
                <section className="position-relative d-flex justify-content-center mb-3">
                    <label htmlFor="email"></label>
                    <input  
                        id="email"
                        type="text" 
                        placeholder="Email..." 
                        {...register("email", { 
                            required: 'Email is required',
                        })}
                    />
                    {errors.email && (
                        <p className="position-absolute top-100 start-50 translate-middle">
                            {errors.email.message}
                        </p>
                    )}
                </section>

                <section className="position-relative d-flex justify-content-center mb-3">
                    <label htmlFor="password"></label>
                    <input 
                        id="password"
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
                    {errors.password && (
                        <p className="position-absolute top-100 start-50 translate-middle">
                            {errors.password.message}
                        </p>
                    )}
                </section>
                <Button type="submit" variant="secondary">Đăng nhập</Button>
            </form>
            <div>
                <Link to={'/auth/register'}>
                    Chuyển sang trang đăng ký
                </Link>
                <span>/</span>
                <Link to={'/auth/resetPassword'}>
                    Quên mật khẩu?
                </Link>
            </div>
        </Container>
    )
}
