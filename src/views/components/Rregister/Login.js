import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import Preloader from "../../custome/Preloader";
import '../../../styles/Register.css';
import useAuth from "../../../hooks/useAuth";
import { Alert } from "@mui/material";

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const {loginUser, isLoading, user, error} = useAuth();
    const location = useLocation();
    const onSubmit = data => {
        const email = data.email;
        const password = data.pass;
        // call user login function
        loginUser(email, password, location);
        reset();
    };
    return (
        <div className='auth-form-area'>
           {isLoading ? <Preloader />
           :<div className="auth-form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="Email*" {...register("email", { required: true })} />
                    <input type="password" placeholder="Password*" {...register("pass", { required: true, minLength: 6 })} />
                    <button type="submit">Submit</button>
                </form>
                <Link to="/register">Want to Create account ?</Link>
                {error && <Alert severity="error">{error}!</Alert>}
            </div>}
        </div>
    );
};

export default Login;