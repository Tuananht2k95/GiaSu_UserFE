import { useForm } from "react-hook-form"
import { Container, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { authApi } from "../../../api/GiaSuUserService/auth";
import { Link } from "react-router-dom";

export function RegisterPage() {
    const { register, handleSubmit, formState: {errors}, setError, getValues } = useForm();
    const store = async (data) => {
        try {
            const {confirmPassword, ...filteredData} = data;
            const res = await authApi.register(filteredData);
            
            if (res.errors) {
                for (const error of res.errors) {                    
                    setError(
                        error.key,
                        {
                            message: error.message
                        }
                    );
                }
                
                return;
            }

            toast(res.message, {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
    
        } catch (error) {            
            toast(error.message);
    }}
    return ( 
        <Container className="authContainer">
        <form className="col-6" onSubmit={(handleSubmit(store))}>
            <h3 className="my-3">Đăng ký</h3>
            <section className="position-relative d-flex justify-content-center mb-3">
                {/* <label htmlFor="email" className="col-4">Email:</label> */}
                <input  
                    type="text" 
                    placeholder="Your name..." 
                    {...register("name", { 
                        required: 'Tên không được để trống',
                    })}
                />
                {errors.name && <p className="position-absolute top-100 start-50 translate-middle">{errors.name.message}</p>}
            </section>
            <section className="position-relative d-flex justify-content-center mb-3">
                {/* <label htmlFor="email" className="col-4">Email:</label> */}
                <input  
                    type="text" 
                    placeholder="Email..." 
                    {...register("email", { 
                        required: 'Email không được để trống',
                    })}
                />
                {errors.email && <p className="position-absolute top-100 start-50 translate-middle">{errors.email.message}</p>}
            </section>
            <section className="position-relative d-flex justify-content-center mb-3">
                {/* <label htmlFor="password" className="col-4">Password:</label> */}
                <input 
                    type="password" 
                    placeholder="Password..." 
                    {...register("password", { 
                        required: 'Mật khẩu không được để trống',
                        minLength: {
                            value: 6,
                            message: 'Mật khẩu phải có ít nhất 6 ký tự'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Mật khẩu phải có nhiều nhất 20 ký tự'
                        }
                    })}
                />
                {errors.password && <p className="position-absolute top-100 start-50 translate-middle">{errors.password.message}</p>}
            </section>
            <section className="position-relative d-flex justify-content-center mb-3">
                {/* <label htmlFor="password" className="col-4">Password:</label> */}
                <input 
                    type="password" 
                    placeholder="Confirm password..." 
                    {...register("confirmPassword", { 
                        required: 'Mật khẩu không được để trống',
                        validate: (value) => {
                            if (value !== getValues("password"))
                                return 'Mật khẩu xác nhận không khớp'
                            }
                    })}
                />
                {errors.confirmPassword && <p className="position-absolute top-100 start-50 translate-middle">{errors.confirmPassword.message}</p>}
            </section>
            <Button type="submit" variant="secondary">Đăng ký</Button>
        </form>
        <div>
            <Link to={'/auth/login'}>
                Chuyển sang trang đăng nhập
            </Link>
        </div>
    </Container>
    )
}
