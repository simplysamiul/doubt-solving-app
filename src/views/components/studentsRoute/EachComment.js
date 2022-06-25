import React, { useEffect, useState } from 'react';
import DoubtService from '../../../manageApi/Doubt.Service';
import '../../../styles/AllDoubt.css';

const EachComment = ({id, uploadComment, setUploadComment}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        DoubtService.getComment(id)
        .then(res => { 
            setComments(res)
            setUploadComment(false)
        })
        .catch(err => {})
    },[id, uploadComment, setUploadComment]);
    return (
        <div className='each-comments-area'>
            <div className="each-comments-container">
                {
                    comments.map(comment => <div className='each-comment' key={comment._id}>
                        <h5>{comment.commenter}</h5>
                        <p>{comment.comment}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default EachComment;