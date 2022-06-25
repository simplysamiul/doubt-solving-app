import { Link  } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../../styles/Menubar.css';

const Menubar = () => {
    const {user, logOut, role} = useAuth();
    return (
        <div className='menu-area'>
            <div className="menu-container">
                <div className="menu-content">
                    <div className="menu-items">
                        {user.email && <Link to="/all_doubt">All Doubt</Link>}
                        {role === "student" && <Link to="/your_doubt">Your Doubt</Link>}
                        {role === "student" &&<Link to="/raise_doubt">Raise Doubt</Link>}
                        {role === "teacher" &&<Link to="/Unresolved">Unresolved</Link>}
                        {role === "teacher" &&<Link to="/your_resolved">Your Resolved</Link>}
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