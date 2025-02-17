import { useForm } from "react-hook-form"
import { userService } from "../../../ultis/axios"
import { Button, Container } from "react-bootstrap";

export function Login() {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const login = async (data) => {
        userService.post()
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
                <h3 className="mb-3">Đăng nhập</h3>
                <section className="position-relative">
                    <label htmlFor="email" className="col-4">Email:</label>
                    <input  
                        className="col-8"
                        type="text" 
                        placeholder="email" 
                        {...register("email", { 
                            required: 'Email is required',
                        })}
                    />
                    {errors.email && <p className="mb-0 ms-5 position-absolute top-100 start-0">{errors.email.message}</p>}
                </section>
                <br></br>
                <section className="position-relative">
                    <label htmlFor="password" className="col-4">Password:</label>
                    <input 
                        className="col-8"
                        type="password" 
                        placeholder="password" 
                        {...register("password", { 
                            required: 'Password is required',
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
                    {errors.password && <p className="mb-0 ms-5 position-absolute top-100 start-0">{errors.password.message}</p>}
                </section>
               
                <br></br>
                <Button className="" type="submit" variant="secondary">Đăng nhập</Button>
            </form>
        </Container>
    )
}
