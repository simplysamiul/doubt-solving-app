import React, { useEffect, useState } from 'react';
import Preloader from '../../custome/Preloader';
import EachStudentDoubt from './EachStudentDoubt';
import DoubtService from '../../../manageApi/Doubt.Service';
import useAuth from '../../../hooks/useAuth';

const EachStuentDoubts = () => {
    const [eachDoubts, setEachDoubts] = useState([]);
    const [loading, setLoading] = useState(false);
    const {user} = useAuth();
    useEffect(() =>{
        setLoading(true);
        DoubtService.getSpecificDoubt(user.email)
        .then(res =>{
            setEachDoubts(res)
            setLoading(false)
        })
        .catch(err => console.log(err))
    },[user.email]);
    console.log(eachDoubts);
    return (
        <div className='your-doubt-area'>
           {loading ? <Preloader />
           :<div className="your-doubt-container" style={{margin : "80px"}}>
                {
                    eachDoubts.map((eachDoubt) => <EachStudentDoubt 
                    key={eachDoubt._id}
                    eachDoubt={eachDoubt}
                    />)
                }
            </div>}
            {eachDoubts.length === 0 && <h3 style={{textAlign:"center"}}>Your don't have any doubt !</h3>}
        </div>
    );
};

export default EachStuentDoubts;