import CommentsForm from './studentsRoute/CommentsForm';
import '../../styles/AllDoubt.css';

const EachDoubt = ({doubt}) => {
    const {description, name, postDate, title, _id, teacher_name, answer, status} = doubt;
    console.log(doubt);
    return (
        <div className='reach-doubt-cart'>
            <div className="doubt-uploader-info">
                <p>{name}</p>
                <div>
                <p>{postDate}</p>
                {status && <p className='resolved'>{status}</p>}
                </div>
            </div>
            <div className="doubt-description">
                <h1>{title}</h1>
                <p>Description : {description}</p>
                {teacher_name && <div className="doubt-ans">
                <p>Answered by : {teacher_name}</p>
                <p>Ans: {answer}</p>
            </div>}
            </div>
            <div className="comment-area">
                <p>Comments</p>
                <CommentsForm _id={_id} />
            </div>
        </div>
    );
};

export default EachDoubt;