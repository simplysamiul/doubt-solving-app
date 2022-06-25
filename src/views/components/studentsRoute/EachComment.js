
import React, { useEffect, useState } from 'react';
import DoubtService from '../../../manageApi/Doubt.Service';

const EachComment = ({id}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        DoubtService.getComment(id)
        .then(res => setComments(res))
        .catch(err =>  console.log(err))
    },[id]);
    console.log(comments);
    return (
        <div className='each-comments-area'>
            <div className="each-comments-container">
                {
                    comments.map(comment => <div key={comment._id}>
                        <h5>{comment.commenter}</h5>
                        <p>{comment.comment}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default EachComment;