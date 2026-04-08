import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/shared/Navbar';
import { ToastContainer } from 'react-toastify';
import Footer from '../Component/shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
                <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />    
        </div>
    );
};

export default RootLayout;