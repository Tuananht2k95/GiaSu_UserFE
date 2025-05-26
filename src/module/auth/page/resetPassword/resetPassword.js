import { useForm } from "react-hook-form";
import { authApi } from "../../../../api/GiaSuUserService/auth";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { useState } from "react";

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

            toast(res.message);

        } catch (error) {
            toast(error);
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit(resetPassword)}>
                <input  
                        className="inputLogin"
                        type="text" 
                        placeholder="Email..." 
                        {...register("email", { 
                            required: 'Email is required',
                        })}
                    />
                {errors.email && <p className="loginText mb-0 position-absolute">{errors.email.message}</p>}
                <Button className="submitButton" type="submit" variant="secondary" disabled={disabled} >Xác nhận email</Button>            
            </form>
        </>
    )
}