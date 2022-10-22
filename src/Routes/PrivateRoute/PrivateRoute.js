import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <h1 className='fw-bold mx-auto mt-5'>Loading...</h1>
    }


    if (!user) {
        return <Navigate to={'/signin'} state={{ from: location }} replace ></Navigate >
    }
    return children;
};

export default PrivateRoute;