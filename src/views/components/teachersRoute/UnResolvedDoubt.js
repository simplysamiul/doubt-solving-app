import * as React from 'react';
import '../../../styles/UnResolvedDoubts.css';
import Dialoge from '../../custome/Dialoage';

const UnResolvedDoubt = ({doubt}) => {
    const {title} = doubt;
    const [open, setOpen] = React.useState(false);
    return (
        <div className='unresolved-doubt-area'>
            <div className="unresolved-doubt-conatiner">
            <h1>{title}</h1>
            <button variant="outlined" onClick={() => setOpen(true)}> Accept </button>
            </div>
            <Dialoge
            open={open}
            setOpen={setOpen}
            />
        </div>
    );
};

export default UnResolvedDoubt;