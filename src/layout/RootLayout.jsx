import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/shared/Navbar';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
                <Outlet></Outlet>
            <h3>Footer</h3>
            <ToastContainer />    
        </div>
    );
};

export default RootLayout;