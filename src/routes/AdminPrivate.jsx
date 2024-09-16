import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminPrivate = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (!user || user.role !== 'admin' && !loading) {
        return <Navigate to="/login" state={location.pathname} />;
    }

    return children;
};

export default AdminPrivate;