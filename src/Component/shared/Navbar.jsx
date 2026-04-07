import React from 'react';
import logoImg from '../../assets/images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='w-full sticky top-0 z-50 bg-white shadow'>
            <div className='max-w-7xl mx-auto p-4 md:px-6 h-14 md:h-16 flex items-center justify-between'>
                <div><img href="/" src={logoImg} alt="" 
                className='h-10' /></div>
                <div className='hidden md:flex items-center gap-6 lg:gap-8'>
                    <NavLink to="/"
                    className='text-sm font-medium text-gray-600 hover:text-blue-600'>
                        Home</NavLink>
                    <NavLink to="/apps"
                    className='text-sm font-medium text-gray-600 hover:text-blue-600'>
                        Apps</NavLink>
                    <NavLink to="/installApps"
                    className='text-sm font-medium text-gray-600 hover:text-blue-600'>
                        Installed</NavLink>
                </div>
                <button className='px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg'>
                    Countebute
                </button>
                <button className='md:hidden p-2 rounded-lg hover:bg-gray-100'><GiHamburgerMenu /> </button>
            </div>
        </div>
    );
};

export default Navbar;