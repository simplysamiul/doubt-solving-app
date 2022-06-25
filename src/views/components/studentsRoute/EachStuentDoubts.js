import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Preloader from '../../custome/Preloader';
import EachStudentDoubt from './EachStudentDoubt';
import DoubtService from '../../../manageApi/Doubt.Service';

const EachStuentDoubts = () => {
    const [eachDoubts, setEachDoubts] = useState([]);
    const [loading, setLoading] = useState(false);
    const {user} = useAuth();
    useEffect(() =>{
        setLoading(true);
        DoubtService.getSpecificDoubt(user.email)
        .then(res =>{
            console.log(res)
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