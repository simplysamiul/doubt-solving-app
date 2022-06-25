import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import DoubtService from '../../../manageApi/Doubt.Service';
import EachComment from "./EachComment";

const CommentsForm = ({_id}) => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const comment = data.comment;
        const commenter = user.displayName;
        const postId = _id; 
        const finalComment = {comment, commenter, postId};
        DoubtService.postComment(finalComment)
        .then(res =>  console.log(res))
        .catch(err => console.log(err))
        console.log(finalComment)
        reset();
    };
    return (
        <div className='comments-form-area'>
            <div className="comments-form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Write a comments...." {...register("comment", { required: true })} />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="students-comments-area">
                <div className="students-comments-container">
                    <EachComment id={_id} />
                </div>
            </div>
        </div>
    );
};

export default CommentsForm;