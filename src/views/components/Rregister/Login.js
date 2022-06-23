import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Preloader from "../../custome/Preloader";
import '../../../styles/Register.css';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const onSubmit = data => {
        setLoading(true);
        console.log(data)
        setLoading(false);
    };
    return (
        <div className='auth-form-area'>
           {loading ? <Preloader />
           :<div className="auth-form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="Email*" {...register("email", { required: true })} />
                    <input type="password" placeholder="Password*" {...register("pass", { required: true, minLength: 6 })} />
                    <button type="submit">Submit</button>
                </form>
                <Link to="/register">Want to Create account ?</Link>
            </div>}
        </div>
    );
};

export default Login;