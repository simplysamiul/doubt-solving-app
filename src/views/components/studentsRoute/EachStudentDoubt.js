import React from 'react';

const EachStudentDoubt = ({eachDoubt}) => {
    const {description, email, name, postDate, title} = eachDoubt;
    
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
    </div>
    );
};

export default EachStudentDoubt;