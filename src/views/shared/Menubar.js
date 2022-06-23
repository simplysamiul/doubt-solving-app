import { useEffect, useState } from 'react';
import { Link  } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AuthService from '../../manageApi/Auth.Service';
import '../../styles/Menubar.css';

const Menubar = () => {
    const {user, logOut} = useAuth();
    const [dbUser, setDbUser] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        setLoading(true);
        AuthService.getSpecificUser(user.email)
        .then(res => {
            setDbUser(res);
            setLoading(false);
        })
        .catch(error => {})
    },[user.email]);
    console.log(dbUser)
    return (
        <div className='menu-area'>
            <div className="menu-container">
                <div className="menu-content">
                    <div className="menu-items">
                        <Link to="/home">Home</Link>
                        <Link to="/home">Your Doubt</Link>
                        {dbUser.role == "student" && <Link to="/home">Raise Doubt</Link>}
                    </div>
                    <div>
                        {user.email ? <div className='user-name'>
                            <button className='menu-logout' onClick={() => logOut()}>Logout</button>
                            <p>{user.displayName}</p>
                        </div>
                        :<Link className="menu-login" to="/login">Login</Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;