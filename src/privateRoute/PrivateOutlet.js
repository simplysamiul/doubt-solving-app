import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Preloader from '../views/custome/Preloader';

const PrivateOutlet = () => {
    const {user, isLoading} = useAuth();
    const location = useLocation();
    if(isLoading){
        return <Preloader />
    }
    return (
        user.email ? <Outlet />
        : <Navigate to="/login" replace state={{from: location}} />
    );
};

export default PrivateOutlet;