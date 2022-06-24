import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Preloader from "../../custome/Preloader";
import useAuth from "../../../hooks/useAuth";
import '../../../styles/Register.css';
import { Alert } from "@mui/material";

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const {createUser, isLoading, error} = useAuth();
    const onSubmit = data => {
        const email = data.email;
        const name = data.name;
        const password = data.pass;
        const role= data.role;
        // Call create user function
        createUser(email, password, name, role);
        reset();
    };
    return (
        <div className='auth-form-area'>
           {isLoading ? <Preloader />
           :<div className="auth-form-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="FullName*" {...register("name", { required: true, maxLength: 20 })} />
                    <input type="email" placeholder="Email*" {...register("email", { required: true })} />
                    <input type="password" placeholder="Password*" {...register("pass", { required: true, minLength: 6 })} />
                    <div className="user-role">
                        <label>Role: </label>
                        <input type="radio" name="student" id="student" value="student" {...register("role", { required: true })} required />
                        <label htmlFor="student">Student</label>
                        <input type="radio" name="teacher" id="teacher" value="teacher" {...register("role", { required: true })} required />
                        <label htmlFor="teacher">Teacher</label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <Link to="/login">Already have an account ?</Link>
                {error && <Alert severity="error">{error}!</Alert>}
            </div>}
        </div>
    );
};

export default Register;