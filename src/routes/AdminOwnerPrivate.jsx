import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminOwnerPrivate = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (user || user.role == 'admin' || user.role == 'owner' && !loading) {
        return children;
    }

    return <Navigate to="/login" state={location.pathname} />;;
};

export default AdminOwnerPrivate;