import { useForm } from "react-hook-form"
import { userService } from "../../../ultis/axios"
import { Container } from "react-bootstrap";

export function Register() {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const login = async (data) => {
        userService.get()
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.error('Error during GET request:', error);
            });
    }
    return ( 
        <Container className="d-flex justify-content-center">
            <form id="loginForm" className="col-5" onSubmit={(handleSubmit(login))}>
                <h2 className="text-center">Register</h2>
                <label for="email" className="col-4">Email:</label>
                <input  
                    className="col-8"
                    type="text" 
                    placeholder="email" 
                    {...register("email", { 
                        required: 'Email is required',
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <br></br>
                <label for="password" className="col-4">Password:</label>
                <input 
                    className="col-8"
                    type="password" 
                    placeholder="password" 
                    {...register("password", { 
                        required: 'password is required',
                        minLength: {
                            value: 8,
                            message: 'password must be at least 8 characters'
                        },
                        maxLength: {
                            value: 20,
                            message: 'password must be at most 20 characters'
                        }
                    })}
                />
                {errors.password && <p>{errors.password.message}</p>}
                <br></br>
                <button className="" type="submit">Đăng nhập</button>
            </form>
        </Container>
    )
}
