import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import DoubtService from "../../../manageApi/Doubt.Service";
import Preloader from '../../custome/Preloader';
import '../../../styles/UploadDoubt.css';
import { Alert } from "@mui/material";

const UploadDoubt = () => {
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const onSubmit = data => {
        setLoading(true);
        const email = user.email;
        const name = user.displayName;
        const title = data.title;
        const description = data.description;
        const date = new Date();
        const postDate = date.toLocaleString();
        const doubt = {email, title, description, name, postDate};
        DoubtService.postDoubt(doubt)
        .then(res => {
            setSuccess(res.acknowledged)
            setLoading(false);
        })
        .catch(err => {})
        reset();
    };
    return (
        <div className='upoad-doubt-area'>
            <div className="upload-doubt-container">
                <div className="section-title">
                    <h1>Raise doubt</h1>
                </div>
                <div className="upload-doubt-form">
               { loading ? <Preloader />
               :<form onSubmit={handleSubmit(onSubmit)}>
                    <label>Title*</label>
                    <input type="text" placeholder="Title" {...register("title", { required: true })} />
                    <label>Description</label>
                    <textarea name="" id="" cols="30" rows="10"  placeholder="Description*" {...register("description", { required: true})} />
                    <button type="submit">Submit</button>
                </form>}
                    {success && <Alert severity="success">Your doubt uploaded!</Alert>}
                </div>
            </div>
        </div>
    );
};

export default UploadDoubt;