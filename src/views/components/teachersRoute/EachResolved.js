import '../../../styles/AllDoubt.css';

const EachResolved = ({resolve}) => {
    const {description, answer, title, name, postDate, status, teacher_name} = resolve;
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
        </div>
    );
};

export default EachResolved;