import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import DoubtService from '../../../manageApi/Doubt.Service';
import Preloader from '../../custome/Preloader';
import EachResolved from './EachResolved';

const ResolvedData = () => {
    const [resolveds, setResolveds] = useState([]);
    const [loading, setLoading] = useState(false);
    const {user} = useAuth();
    useEffect(() =>{
        setLoading(true)
        DoubtService.getResolvedData(user.email)
        .then((res) => {
            setResolveds(res);
            setLoading(false)
        })
    },[user.email])
    return (
        <div className='resolved-area' style={{margin:"80px"}}>
           {loading ? <Preloader /> 
           :<div className="resolved-container">
                {
                    resolveds.map((resolve) => <EachResolved 
                    key={resolve._id}
                    resolve={resolve}
                    />)
                }
            </div>}
        </div>
    );
};

export default ResolvedData;