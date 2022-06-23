import { NavLink, Link  } from 'react-router-dom';
import '../../styles/Menubar.css';

const Menubar = () => {
    return (
        <div className='menu-area'>
            <div className="menu-container">
                <div className="menu-content">
                    <div className="menu-items">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/home">Your Doubt</NavLink>
                        <NavLink to="/home">Raise Doubt</NavLink>
                    </div>
                    <div className="menu-login">
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;