import React, { useEffect, useState } from 'react';
import DoubtService from '../../../manageApi/Doubt.Service';
import Preloader from '../../custome/Preloader';
import UnResolvedDoubt from './UnResolvedDoubt';
import '../../../styles/UnResolvedDoubts.css';

const UnResolvedDoubts = () => {
    const [doubts, setDoubts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        setLoading(true)
        DoubtService.getAllDoubt()
        .then(res => {
            setDoubts(res);
            setLoading(false);
        })
        .catch(err => {})
    },[]);
    // Filter unresolved data
    const unResolved = doubts.filter((items) => items.status !== "resolved" );
    return (
        <div className='unresoolved-doubts-area'>
            <h1>Solve Doubts</h1>
            {loading ? <Preloader /> 
            :<div className="unresoolved-doubts-container">
                {
                    unResolved.map((doubt) => <UnResolvedDoubt 
                    key={doubt._id}
                    doubt={doubt}
                    />)
                }
            </div>}
        </div>
    );
};

export default UnResolvedDoubts;