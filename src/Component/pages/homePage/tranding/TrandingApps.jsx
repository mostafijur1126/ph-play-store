import React, { useEffect, useState } from 'react';
import { FaDownload, FaStar, FaEye, FaFire, FaArrowRight, FaAndroid, FaApple } from 'react-icons/fa';
import { MdTrendingUp } from 'react-icons/md';

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
                        <div 
                            key={app.id} 
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                        >
                            {/* Gradient Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            
                            {/* Trending Badge for first 3 apps */}
                            {index < 3 && (
                                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                    <FaFire className="text-xs" />
                                    Trending
                                </div>
                            )}
                            
                            {/* App Image */}
                            <figure className="relative overflow-hidden h-48 bg-gradient-to-br from-purple-100 to-indigo-100">
                                <img
                                    src={app.image}
                                    alt={app.title}
                                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Platform Badge */}
                                <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-semibold flex items-center gap-1 shadow-md">
                                    {app.platform === 'both' ? (
                                        <>
                                            <FaAndroid className="text-green-600" />
                                            <FaApple className="text-gray-800" />
                                        </>
                                    ) : app.platform === 'android' ? (
                                        <FaAndroid className="text-green-600" />
                                    ) : (
                                        <FaApple className="text-gray-800" />
                                    )}
                                </div>
                            </figure>
                            
                            {/* App Details */}
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                                    {app.title}
                                </h2>
                                
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                    {app.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                                </p>
                                
                                {/* Stats */}
                                <div className="flex justify-between items-center mb-4">
                                    {/* Downloads */}
                                    <div className="flex items-center gap-2">
                                        <div className="bg-purple-100 p-2 rounded-full">
                                            <FaDownload className="text-purple-600 text-sm" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Downloads</p>
                                            <p className="font-semibold text-gray-800">{app.downloads}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Rating */}
                                    <div className="flex items-center gap-2">
                                        <div className="bg-yellow-100 p-2 rounded-full">
                                            <FaStar className="text-yellow-500 text-sm" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Rating</p>
                                            <p className="font-semibold text-gray-800 flex items-center gap-1">
                                                {app.ratingAvg}
                                                <span className="text-xs text-gray-400">/5</span>
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Views */}
                                    <div className="flex items-center gap-2">
                                        <div className="bg-blue-100 p-2 rounded-full">
                                            <FaEye className="text-blue-500 text-sm" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Views</p>
                                            <p className="font-semibold text-gray-800">{app.views || '1.2M'}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Action Button */}
                                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 rounded-xl font-semibold text-sm hover:from-purple-700 hover:to-purple-800 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                                    <span>View Details</span>
                                    <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
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