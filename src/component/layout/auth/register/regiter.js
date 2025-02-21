import { useForm } from "react-hook-form"
import { Container, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { userTeacherApi } from "../../../../api/GiaSuUserService/teacher/user";
import './register.scss'
import { useNavigate } from "react-router-dom";


export function Register() {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const store = async (data) => {
        const res = await userTeacherApi.store(data)
        toast(res.message, {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }
        );
    }
    return ( 
        <Container  id="registerForm" className="d-flex justify-content-center">
        <form className="col-6" onSubmit={(handleSubmit(store))}>
            <h3 className="mb-3 loginTitle">Đăng ký</h3>
            <section className="position-relative d-flex justify-content-center">
                {/* <label htmlFor="email" className="col-4">Email:</label> */}
                <input  
                    className="inputLogin"
                    type="text" 
                    placeholder="Your name..." 
                    {...register("name", { 
                        required: 'Tên không được để trống',
                    })}
                />
                {errors.name && <p className="loginText mb-0 position-absolute top-100 start-50 translate-middle">{errors.name.message}</p>}
            </section>
            <br></br>
            <section className="position-relative d-flex justify-content-center">
                {/* <label htmlFor="email" className="col-4">Email:</label> */}
                <input  
                    className="inputLogin"
                    type="text" 
                    placeholder="Email..." 
                    {...register("email", { 
                        required: 'Email không được để trống',
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
                {errors.password && <p className="loginText mb-0 position-absolute top-100 start-50 translate-middle">{errors.password.message}</p>}
            </section>
            <br></br>
            <Button className="submitButton" type="submit" variant="secondary">Đăng ký</Button>
        </form>
        <ToastContainer></ToastContainer>
    </Container>
    )
}
