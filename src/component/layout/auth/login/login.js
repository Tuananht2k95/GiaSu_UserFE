import { useForm } from "react-hook-form"
import { Button, Container } from "react-bootstrap";
import { authApi } from "../../../../api/GiaSuUserService/auth";
import { useCookies } from "react-cookie";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import './login.scss'

export function Login() {
    const { register, handleSubmit, formState: {errors}, setError } = useForm();
    const setCookie = useCookies('user_token')[1];
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
                return;
            }

            for (const error of res.errors) {
                setError(
                    error.key,
                    {
                        message: error.messages
                    }
                )
            }
        } catch (error) {
            toast(error);
        }
    };

    return ( 
        <Container id="loginForm" className="d-flex justify-content-center">
            <form className="col-6" onSubmit={(handleSubmit(login))}>
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
        </Container>
    )
}
