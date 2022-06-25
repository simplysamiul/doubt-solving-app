import '../../../styles/EachStudentDoubt.css';

const EachStudentDoubt = ({eachDoubt}) => {
    const {description, name, postDate, title} = eachDoubt;
    
    return (
        <div className='student-doubt-cart'>
        <div className="student-doubt-info">
            <p>{name}</p>
            <p>{postDate}</p>
        </div>
        <div className="student-doubt-description">
            <h1>{title}</h1>
            <p>Description : {description}</p>
        </div>
    </div>
    );
};

export default EachStudentDoubt;