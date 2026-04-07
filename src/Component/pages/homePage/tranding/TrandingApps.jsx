import React, { useEffect, useState } from 'react';

import { MdTrendingUp } from 'react-icons/md';
import AppCard from '../../../Ui/AppCard';
import { FaArrowRight, FaFire } from 'react-icons/fa';

const TrandingApps = () => {
    const [apps, setApps] = useState([]);
    
    useEffect(() => {
        const faceData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            setApps(data);
        }
        faceData();
    }, []);

    return (
        <div className="bg-gradient-to-br from-white via-purple-50 to-indigo-50 py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
                        <MdTrendingUp className="text-xl" />
                        <span className="text-sm font-semibold">Hot Right Now</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                            Trending
                        </span>{' '}
                        Apps
                    </h1>
                    
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti culpa quaerat ut sequi placeat saepe fuga quisquam, totam reiciendis.
                    </p>
                    
                    <div className="inline-flex items-center gap-2 bg-purple-100 px-6 py-2 rounded-full">
                        <FaFire className="text-orange-500 animate-pulse" />
                        <span className="text-gray-700 font-semibold">Total Apps: {apps.length}</span>
                    </div>
                </div>

                {/* Apps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {apps.map((app, index) => (
                        <AppCard key={app.id} index={index} app={app}></AppCard>
                    ))}
                </div>
                
                {/* View All Button */}
                {apps.length > 0 && (
                    <div className="text-center mt-12 md:mt-16">
                        <button className="group bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-xl">
                            <span>View All Apps</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                )}

                {/* Loading State */}
                {apps.length === 0 && (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center gap-3 bg-purple-100 px-6 py-3 rounded-full">
                            <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-purple-600 font-semibold">Loading amazing apps...</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrandingApps;