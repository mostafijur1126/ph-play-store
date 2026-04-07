import React from 'react';
import logoImg from '../../assets/images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoLogoGithub } from 'react-icons/io';
import MyNavlink from './MyNavlink';

const Navbar = () => {
    const navItems =[
        {
            path: "/",
            text: "Home"
        },
         {
            path: "/apps",
            text: "Apps"
        },
         {
            path: "/installApps",
            text: "Installed"
        }
    ]
    return (
        <div className='w-full sticky top-0 z-50 bg-white shadow'>
            <div className='max-w-7xl mx-auto p-4 md:px-6 h-14 md:h-16 flex items-center justify-between'>
                <div><img href="/" src={logoImg} alt=""
                    className='h-10' /></div>
                <div className='hidden md:flex items-center gap-6 lg:gap-8'>
                    {
                        navItems.map((item, i)=><MyNavlink key={i} to={item.path}>{item.text}</MyNavlink>)
                    }
                    {/* <MyNavlink to="/">Home</MyNavlink>
                    <MyNavlink to="/apps">Apps</MyNavlink>
                    <MyNavlink to="/installApps">Installed</MyNavlink> */}
                </div>
                <button className='flex items-center gap-1 px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg'>
                    <IoLogoGithub />
                    Countebute
                </button>
                <button className='md:hidden p-2 rounded-lg hover:bg-gray-100'><GiHamburgerMenu /> </button>
            </div>
        </div>
    );
};

export default Navbar;