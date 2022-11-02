import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Private = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <h1 className='text-center text-3xl mt-16'>Loading...</h1>
    }
    if (user?.email) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default Private;