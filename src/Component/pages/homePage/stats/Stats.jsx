import React from 'react';
import { FaUsers, FaDownload, FaGlobe, FaTrophy, FaStar, FaRocket } from 'react-icons/fa';

const Stats = () => {
    return (
        <div className="bg-gradient-to-br from-white via-purple-50 to-indigo-50 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
                        <FaStar className="text-yellow-500" />
                        <span className="text-sm font-semibold">Our Achievements</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Trusted by millions,{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                            built for you
                        </span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Join thousands of satisfied users who experience the difference every day
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                    {/* Stat 1 */}
                    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center transform hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="inline-flex p-4 bg-purple-100 rounded-full mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                                <FaUsers className="text-4xl text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                                29.5<span className="text-purple-600">M</span>
                            </h3>
                            <p className="text-gray-600 font-semibold mb-2">Active Users</p>
                            <p className="text-sm text-gray-500">Worldwide community</p>
                            <div className="mt-4 flex items-center justify-center gap-1 text-yellow-500">
                                <FaStar className="text-sm" />
                                <FaStar className="text-sm" />
                                <FaStar className="text-sm" />
                                <FaStar className="text-sm" />
                                <FaStar className="text-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center transform hover:scale-105 md:translate-y-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="inline-flex p-4 bg-purple-100 rounded-full mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                                <FaDownload className="text-4xl text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                                906<span className="text-purple-600">K</span>
                            </h3>
                            <p className="text-gray-600 font-semibold mb-2">Total Downloads</p>
                            <p className="text-sm text-gray-500">And counting daily</p>
                            <div className="mt-4 flex items-center justify-center gap-1 text-green-500">
                                <FaRocket className="text-sm" />
                                <span className="text-xs font-semibold">+25% this month</span>
                            </div>
                        </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center transform hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                            <div className="inline-flex p-4 bg-purple-100 rounded-full mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                                <FaGlobe className="text-4xl text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                                132<span className="text-purple-600">+</span>
                            </h3>
                            <p className="text-gray-600 font-semibold mb-2">Countries</p>
                            <p className="text-sm text-gray-500">Global presence</p>
                            <div className="mt-4 flex items-center justify-center gap-1 text-purple-500">
                                <FaTrophy className="text-sm" />
                                <span className="text-xs font-semibold">Top rated globally</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Indicator */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
                        <span className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500"></span>
                        <span>Join our growing family</span>
                        <span className="w-12 h-px bg-gradient-to-l from-transparent to-purple-500"></span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-4">
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;