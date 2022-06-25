import '../../../styles/UnResolvedDoubts.css';
const UnResolvedDoubt = ({doubt}) => {
    const {title} = doubt;
    console.log(doubt);
    return (
        <div className='unresolved-doubt-conatiner'>
            <h1>{title}</h1>
            <button>Accept</button>
        </div>
    );
};

export default UnResolvedDoubt;