import React from 'react';
import { FaGooglePlay, FaApple, FaCheckCircle } from 'react-icons/fa';
import { MdCloudQueue, MdSecurity, MdSpeed } from 'react-icons/md';
import bannerimg from "../../../../assets/images/hero.png";

const Banner = () => {
    return (
        <div className=" bg-gradient-to-br from-white via-purple-50 to-indigo-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            <span className="text-sm font-semibold">Trusted by 10,000+ users</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            We Build{' '}
                            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                                Productive
                            </span>{' '}
                            Apps
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 max-w-2xl lg:mx-0 mx-auto leading-relaxed">
                            At HERO.IO, we craft innovative apps designed to make everyday life simpler, 
                            smarter, and more exciting. Our goal is to turn your ideas into digital 
                            experiences that truly make an impact.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl lg:mx-0 mx-auto">
                            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-700">
                                <MdCloudQueue className="text-purple-500 text-xl" />
                                <span>Cloud Based</span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-700">
                                <MdSecurity className="text-purple-500 text-xl" />
                                <span>Secure Data</span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-700">
                                <MdSpeed className="text-purple-500 text-xl" />
                                <span>Lightning Fast</span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <button className="group bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                                <FaGooglePlay className="text-xl group-hover:scale-110 transition-transform" />
                                <span>
                                    <span className="text-xs block">GET IT ON</span>
                                    <span className="font-bold">Google Play</span>
                                </span>
                            </button>
                            
                            <button className="group bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                                <FaApple className="text-xl group-hover:animate-bounce transition-transform" />
                                <span>
                                    <span className="text-xs block">Download on the</span>
                                    <span className="font-bold">App Store</span>
                                </span>
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <FaCheckCircle className="text-green-500" />
                                <span>30-day free trial</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCheckCircle className="text-green-500" />
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCheckCircle className="text-green-500" />
                                <span>24/7 Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 relative">
                        <div className="hidden md:block relative z-10">
                            <img 
                                src={bannerimg} 
                                alt="Hero Illustration" 
                                className="w-full h-auto max-w-lg mx-auto lg:max-w-full"
                            />
                        </div>
                        
                        {/* Background Decorative Elements */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-300 rounded-full filter blur-2xl opacity-30"></div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-300 rounded-full filter blur-2xl opacity-30"></div>
                        
                        {/* Floating Cards */}
                        <div className="absolute top-10 left-0 bg-white rounded-lg shadow-xl p-3 hidden lg:block">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs font-semibold">5K+ Downloads</span>
                            </div>
                        </div>
                        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-3 hidden lg:block">
                            <div className="flex items-center gap-2">
                                <div className="text-purple-500 font-bold">⭐ 4.9</div>
                                <span className="text-xs font-semibold">Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;