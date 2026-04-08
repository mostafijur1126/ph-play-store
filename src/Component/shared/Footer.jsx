import React from 'react';
import { Link } from 'react-router';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube, FaTelegram, FaDiscord } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime, MdApps, MdInstallMobile, MdTrendingUp } from 'react-icons/md';
import { IoLogoGooglePlaystore, IoLogoApple } from 'react-icons/io5';
import { SiTrustpilot } from 'react-icons/si';
import logoImg from '../../assets/images/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { path: "/", text: "Home" },
        { path: "/apps", text: "All Apps" },
        { path: "/installApps", text: "Installed Apps" },
        { path: "/trending", text: "Trending" },
        { path: "/about", text: "About Us" },
        { path: "/contact", text: "Contact" },
    ];

    const supportLinks = [
        { path: "/faq", text: "FAQ" },
        { path: "/help", text: "Help Center" },
        { path: "/privacy", text: "Privacy Policy" },
        { path: "/terms", text: "Terms of Service" },
        { path: "/refund", text: "Refund Policy" },
        { path: "/support", text: "24/7 Support" },
    ];

    const socialLinks = [
        { icon: <FaFacebook />, url: "https://facebook.com", color: "hover:bg-blue-600" },
        { icon: <FaTwitter />, url: "https://twitter.com", color: "hover:bg-blue-400" },
        { icon: <FaInstagram />, url: "https://instagram.com", color: "hover:bg-pink-600" },
        { icon: <FaLinkedin />, url: "https://linkedin.com", color: "hover:bg-blue-700" },
        { icon: <FaGithub />, url: "https://github.com", color: "hover:bg-gray-800" },
        { icon: <FaYoutube />, url: "https://youtube.com", color: "hover:bg-red-600" },
        { icon: <FaTelegram />, url: "https://telegram.org", color: "hover:bg-blue-500" },
        { icon: <FaDiscord />, url: "https://discord.com", color: "hover:bg-indigo-600" },
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                
                {/* Top Section with Newsletter */}
                <div className="border-b border-purple-800/50 pb-10 mb-10">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                Subscribe to Our Newsletter
                            </h3>
                            <p className="text-purple-200">
                                Get the latest updates on new apps and exclusive offers!
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                            <div className="relative flex-1">
                                <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full pl-10 pr-4 py-3 bg-purple-800/50 border border-purple-700 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 text-white placeholder-purple-300"
                                />
                            </div>
                            <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center gap-2">
                            <img src={logoImg} alt="Logo" className="h-10 w-auto" />
                            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                                HERO.IO
                            </span>
                        </Link>
                        <p className="text-purple-200 text-sm leading-relaxed">
                            Crafting innovative apps designed to make everyday life simpler, smarter, and more exciting. 
                            Turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-purple-200">
                            <SiTrustpilot className="text-green-500 text-xl" />
                            <span className="font-semibold">Trustpilot Rating:</span>
                            <div className="flex items-center gap-1">
                                <span className="text-yellow-400">★★★★★</span>
                                <span>4.9/5</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <MdApps className="text-purple-400" />
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <Link 
                                        to={link.path}
                                        className="text-purple-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <MdInstallMobile className="text-purple-400" />
                            Support
                        </h3>
                        <ul className="space-y-2">
                            {supportLinks.map((link, i) => (
                                <li key={i}>
                                    <Link 
                                        to={link.path}
                                        className="text-purple-200 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:w-2 transition-all"></span>
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <MdTrendingUp className="text-purple-400" />
                            Contact Us
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 text-purple-200">
                                <MdLocationOn className="text-purple-400 mt-1 flex-shrink-0" />
                                <span className="text-sm">123 Innovation Street, Tech City, TC 12345</span>
                            </div>
                            <div className="flex items-center gap-3 text-purple-200">
                                <MdPhone className="text-purple-400" />
                                <span className="text-sm">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-purple-200">
                                <MdEmail className="text-purple-400" />
                                <span className="text-sm">support@hero.io</span>
                            </div>
                            <div className="flex items-center gap-3 text-purple-200">
                                <MdAccessTime className="text-purple-400" />
                                <span className="text-sm">24/7 Customer Support</span>
                            </div>
                        </div>

                        {/* Download Buttons */}
                        <div className="mt-6 space-y-2">
                            <button className="w-full bg-purple-800/50 hover:bg-purple-700/50 border border-purple-700 rounded-lg px-4 py-2 flex items-center justify-center gap-2 transition-all duration-300">
                                <IoLogoGooglePlaystore className="text-xl" />
                                <span className="text-sm font-semibold">Google Play</span>
                            </button>
                            <button className="w-full bg-purple-800/50 hover:bg-purple-700/50 border border-purple-700 rounded-lg px-4 py-2 flex items-center justify-center gap-2 transition-all duration-300">
                                <IoLogoApple className="text-xl" />
                                <span className="text-sm font-semibold">App Store</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-purple-800/50 mt-10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex gap-3">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 bg-purple-800/50 rounded-full flex items-center justify-center text-purple-200 hover:text-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        
                        {/* Trust Badges */}
                        <div className="flex gap-4 text-xs text-purple-300">
                            <span className="flex items-center gap-1">
                                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                                SSL Secure
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                                100% Safe
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                                Verified Company
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-purple-800/50 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-purple-300">
                        <p>
                            &copy; {currentYear} HERO.IO. All rights reserved. | 
                            <Link to="/privacy" className="hover:text-white ml-1">Privacy Policy</Link>
                            <span className="mx-1">|</span>
                            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
                        </p>
                        <p className="flex items-center gap-1">
                            Made with <span className="text-red-500 animate-pulse">❤️</span> by HERO.IO Team
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;