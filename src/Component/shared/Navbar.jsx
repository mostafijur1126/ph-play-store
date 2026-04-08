import React, { useState } from 'react';
import { Link } from 'react-router';
import logoImg from '../../assets/images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoLogoGithub } from 'react-icons/io';
import { FaTimes, FaHome, FaDownload, FaUser, FaMoon, FaSun, FaGooglePlay } from 'react-icons/fa';
import { MdInstallMobile } from 'react-icons/md';
import MyNavlink from './MyNavlink';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const navItems = [
        {
            path: "/",
            text: "Home",
            icon: <FaHome />
        },
        {
            path: "/apps",
            text: "Apps",
            icon: <FaGooglePlay />
        },
        {
            path: "/installApps",
            text: "Installed",
            icon: <MdInstallMobile />
        }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // You can implement actual theme switching logic here
    };

    return (
        <>
            <nav className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        
                        {/* Logo Section */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="relative">
                                <img 
                                    src={logoImg} 
                                    alt="Logo" 
                                    className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </div>
                            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent hidden sm:inline-block">
                                HERO.IO
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1 lg:gap-2">
                            {navItems.map((item, i) => (
                                <MyNavlink key={i} to={item.path}>
                                    <div className="flex items-center gap-2">
                                        {item.icon}
                                        {item.text}
                                    </div>
                                </MyNavlink>
                            ))}
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-2 md:gap-3">
                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleTheme}
                                className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300"
                            >
                                {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-purple-600" />}
                            </button>

                            {/* Contribute Button */}
                            <a 
                                href="https://github.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden flex items-center gap-2 px-4 md:px-5 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                <IoLogoGithub className="text-lg relative z-10 group-hover:rotate-12 transition-transform" />
                                <span className="relative z-10 hidden sm:inline">Contribute</span>
                                <span className="relative z-10 sm:hidden">Git</span>
                            </a>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleMenu}
                                className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            >
                                {isMenuOpen ? (
                                    <FaTimes className="text-2xl text-purple-600" />
                                ) : (
                                    <GiHamburgerMenu className="text-2xl text-gray-700" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
                    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={toggleMenu}
            />

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <img src={logoImg} alt="Logo" className="h-8 w-auto" />
                        <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                            HERO.IO
                        </span>
                    </div>
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-lg hover:bg-purple-50 transition-colors"
                    >
                        <FaTimes className="text-xl text-gray-600" />
                    </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="flex flex-col p-6 gap-2">
                    {navItems.map((item, i) => (
                        <Link
                            key={i}
                            to={item.path}
                            onClick={toggleMenu}
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300 group"
                        >
                            <span className="text-xl text-purple-500 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </span>
                            <span className="font-semibold">{item.text}</span>
                        </Link>
                    ))}
                    
                    {/* Divider */}
                    <div className="my-4 h-px bg-gray-200"></div>
                    
                    {/* Mobile Theme Toggle */}
                    <button
                        onClick={() => {
                            toggleTheme();
                            toggleMenu();
                        }}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                    >
                        <span className="text-xl">
                            {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-purple-600" />}
                        </span>
                        <span className="font-semibold">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                    </button>
                    
                    {/* Mobile Contribute Button */}
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={toggleMenu}
                        className="flex items-center justify-center gap-2 mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                        <IoLogoGithub className="text-xl" />
                        Contribute on GitHub
                    </a>
                </div>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                        <FaUser className="text-purple-500" />
                        <span>© 2024 HERO.IO. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;