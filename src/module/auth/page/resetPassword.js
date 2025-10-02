import { useForm } from "react-hook-form";
import { authApi } from "../../../api/GiaSuUserService/auth";
import { toast } from "react-toastify";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

export function ResetPassword() {
    const { register, handleSubmit, formState: {errors}, setError } = useForm();
    const [disabled, setDisabled] = useState(false);
    const resetPassword = async (data) => {
        try {
            setDisabled(true);
            setTimeout(() => {
                setDisabled(false)
            }, 2000)
            const res = await authApi.resetPassword(data);

            if (res.errors) {
                for (const error of res.errors) {
                    console.log(error);
                    
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
            toast(error);
        }
    }
    return(
        <Container className="authContainer">
            <form className="col-6" onSubmit={handleSubmit(resetPassword)}>
                <h3 className="my-3">Đặt lại mật khẩu</h3>
                <section className="position-relative d-flex justify-content-center mb-3">
                    <input
                        type="text" 
                        placeholder="Email..." 
                        {...register("email", { 
                            required: 'Email không được để trống',
                        })}
                    />
                    {errors.email && <p className="position-absolute top-100 start-50 translate-middle">{errors.email.message}</p>}    
                </section>
                <Button type="submit" variant="secondary" disabled={disabled} >Xác nhận email</Button>        
            </form>
            <div>
                <Link to={'/auth/login'}>
                    Chuyển sang trang đăng nhập
                </Link>
            </div>
        </Container>
    )
}