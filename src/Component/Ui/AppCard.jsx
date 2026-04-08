import React from 'react';
import { FaDownload, FaStar, FaEye, FaFire, FaArrowRight, FaAndroid, FaApple } from 'react-icons/fa';
import { Link } from 'react-router';

const AppCard = ({ app, index }) => {
    return (
        <Link to={`/apps/${app.id}`}>
            <div
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
        </Link>
    );
};

export default AppCard;