import React from 'react';
import DashNavbar from '../dashComponents/DashNavbar';
import DashFooter from '../dashComponents/DashFooter';
import { Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Spinner from '../common/Spinner';

const DashBoardLayout = () => {
    const { loading } = useAuth();
    
    if (loading) return <Spinner />

    return (
        <><div className="min-h-screen flex lg:flex-row flex-col bg-white">
            <DashNavbar />
            {/* Main Content Area */}
            <div className="flex-1 lg:w-4/5 w-full">
                <Outlet />
            </div>
        </div>
            <DashFooter />
        </>
    );
};

export default DashBoardLayout;