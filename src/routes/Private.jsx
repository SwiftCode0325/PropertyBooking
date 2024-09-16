import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (!user && !loading) {
        return <Navigate to="/login" state={location.pathname} />;
    }


    return children;
};

export default Private;