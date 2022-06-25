import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import DoubtService from '../../../manageApi/Doubt.Service';
import Preloader from '../../custome/Preloader';
import EachStudentDoubt from './EachStudentDoubt';

const EachStuentDoubts = () => {
    const [eachDoubts, setEachDoubts] = useState([]);
    console.log(eachDoubts);
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
    return (
        <div className='ypur-doubt-area'>
           {loading ? <Preloader />
           :<div className="your-doubt-container">
                {
                    eachDoubts.map((eachDoubt) => <EachStudentDoubt 
                    key={eachDoubt._id}
                    eachDoubt={eachDoubt}
                    />)
                }
            </div>}
        </div>
    );
};

export default EachStuentDoubts;