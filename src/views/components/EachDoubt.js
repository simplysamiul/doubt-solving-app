import '../../styles/AllDoubt.css';
import CommentsForm from './studentsRoute/CommentsForm';

const EachDoubt = ({doubt}) => {
    const {description, name, postDate, title, _id} = doubt;
    return (
        <div className='reach-doubt-cart'>
            <div className="doubt-uploader-info">
                <p>{name}</p>
                <p>{postDate}</p>
            </div>
            <div className="doubt-description">
                <h1>{title}</h1>
                <p>Description : {description}</p>
            </div>
            <div className="comment-area">
                <p>Comments</p>
                <CommentsForm _id={_id} />
            </div>
        </div>
    );
};

export default EachDoubt;