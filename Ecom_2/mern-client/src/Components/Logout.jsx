import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider'; // Correct import
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logout } = useContext(AuthContext); // Extract logout from AuthContext
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogout = () => {
        if (logout) {
            logout().then(() => {
                alert('Sign-out successful!');
                navigate(from, { replace: true });
            }).catch((error) => {
                console.error('Logout failed', error.message || error);
            });
        } else {
            console.error('Logout function is not defined');
        }
    };

    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
