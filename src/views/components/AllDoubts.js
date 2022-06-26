import React, { useEffect, useState } from 'react';
import DoubtService from '../../manageApi/Doubt.Service';
import Preloader from '../custome/Preloader';
import EachDoubt from './EachDoubt';
import '../../styles/AllDoubt.css';
import useAuth from '../../hooks/useAuth';

const AllDoubts = () => {
    const [doubts, setDoubts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        setLoading(true);
        DoubtService.getAllDoubt()
        .then(res => {
            setDoubts(res);
            setLoading(false);
        })
    },[]);
    return (
        <div className='all-doubts-area'>
           {loading ? <Preloader />
           : <div className="all-doubt-container">
                {
                    doubts.map((doubt) => <EachDoubt 
                    key = {doubt._id}
                    doubt = {doubt}
                    />)
                }
            </div>}
        </div>
    );
};

export default AllDoubts;