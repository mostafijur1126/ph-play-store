import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/shared/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
                <Outlet></Outlet>
            <h3>Footer</h3>    
        </div>
    );
};

export default RootLayout;