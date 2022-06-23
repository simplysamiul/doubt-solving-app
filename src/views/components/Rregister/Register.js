import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Preloader from "../../custome/Preloader";
import '../../../styles/Register.css';

const Register = () => {
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
            </div>}
        </div>
    );
};

export default Register;