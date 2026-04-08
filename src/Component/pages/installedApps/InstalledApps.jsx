import React, { useContext } from 'react';
import { InstallAppsContext } from '../../../Context/InstallAppsContext';
import { FaTrashAlt, FaDownload, FaStar, FaMobileAlt, FaCalendarAlt, FaDatabase } from 'react-icons/fa';
import { MdSecurity, MdWarning } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const InstalledApps = () => {
    const { installApps, setInstallApps } = useContext(InstallAppsContext);
    
    const handelUninstallApp = (app) => {
        const restApps = installApps.filter(iapp => iapp.id !== app.id);
        setInstallApps(restApps);
        toast.warning(`${app.title} has been uninstalled!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            icon: <MdWarning />
        });
    }

    const handelUninstallAll = () => {
        if (installApps.length === 0) {
            toast.info("No apps to uninstall!", {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }
        setInstallApps([]);
        toast.warning("All apps have been uninstalled!", {
            position: "top-right",
            autoClose: 3000,
            icon: <MdWarning />
        });
    }

    const totalSize = installApps.reduce((total, app) => total + (app.size || 0), 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-indigo-50 py-8 md:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
                        <FaMobileAlt className="text-lg" />
                        <span className="text-sm font-semibold">My Apps</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                            Installed
                        </span>{' '}
                        Applications
                    </h1>
                    
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Manage your installed applications, view details, or uninstall them
                    </p>
                </div>

                {/* Stats Cards */}
                {installApps.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Total Apps</p>
                                <p className="text-2xl font-bold text-gray-800">{installApps.length}</p>
                            </div>
                            <div className="bg-purple-100 p-3 rounded-full">
                                <FaMobileAlt className="text-purple-600 text-xl" />
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Total Size</p>
                                <p className="text-2xl font-bold text-gray-800">{totalSize} MB</p>
                            </div>
                            <div className="bg-purple-100 p-3 rounded-full">
                                <FaDatabase className="text-purple-600 text-xl" />
                            </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Avg Rating</p>
                                <p className="text-2xl font-bold text-gray-800 flex items-center gap-1">
                                    {(installApps.reduce((sum, app) => sum + parseFloat(app.ratingAvg), 0) / installApps.length).toFixed(1)}
                                    <span className="text-sm text-gray-500">/5</span>
                                </p>
                            </div>
                            <div className="bg-yellow-100 p-3 rounded-full">
                                <FaStar className="text-yellow-500 text-xl" />
                            </div>
                        </div>
                    </div>
                )}

                {/* Uninstall All Button */}
                {installApps.length > 0 && (
                    <div className="flex justify-end mb-6">
                        <button 
                            onClick={handelUninstallAll}
                            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                        >
                            <FaTrashAlt />
                            Uninstall All
                        </button>
                    </div>
                )}

                {/* Apps Grid */}
                {installApps.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {installApps.map((app) => (
                            <div 
                                key={app.id} 
                                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200"
                            >
                                <div className="flex flex-col sm:flex-row gap-4 p-6">
                                    {/* App Image */}
                                    <div className="sm:w-32 flex-shrink-0">
                                        <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl p-4 group-hover:scale-105 transition-transform duration-300">
                                            <img 
                                                className="w-full h-24 object-contain" 
                                                src={app.image} 
                                                alt={app.title}
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* App Details */}
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                                            <h2 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                                                {app.title}
                                            </h2>
                                            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                                                <FaStar className="text-yellow-500 text-sm" />
                                                <span className="text-sm font-semibold text-gray-700">{app.ratingAvg}</span>
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-500 text-sm mb-3">
                                            Developed by: <span className="font-semibold text-gray-700">{app.companyName}</span>
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-4 mb-4 text-sm">
                                            <div className="flex items-center gap-1 text-gray-600">
                                                <FaDownload className="text-purple-500" />
                                                <span>{app.downloads}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-gray-600">
                                                <FaDatabase className="text-purple-500" />
                                                <span>{app.size} MB</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-gray-600">
                                                <MdSecurity className="text-green-500" />
                                                <span>Verified</span>
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-500 text-xs mb-4 line-clamp-2">
                                            {app.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
                                        </p>
                                        
                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            <Link to={`/app-details/${app.id}`}>
                                                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2">
                                                    <FaMobileAlt />
                                                    View Details
                                                </button>
                                            </Link>
                                            <button 
                                                onClick={() => handelUninstallApp(app)} 
                                                className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2"
                                            >
                                                <FaTrashAlt />
                                                Uninstall
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Installation Date */}
                                <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <FaCalendarAlt />
                                        <span>Installed on: {new Date().toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Empty State
                    <div className="text-center py-16 md:py-24">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-purple-100 rounded-full mb-6">
                            <FaDownload className="text-4xl text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No Installed Apps</h3>
                        <p className="text-gray-500 mb-6 max-w-md mx-auto">
                            You haven't installed any apps yet. Browse our trending apps and install your favorites!
                        </p>
                        <Link to="/trending-apps">
                            <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl">
                                <FaDownload />
                                Browse Apps
                            </button>
                        </Link>
                    </div>
                )}

                {/* Storage Info */}
                {installApps.length > 0 && (
                    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-center gap-3">
                            <MdSecurity className="text-blue-500 text-xl" />
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-800">Storage Information</p>
                                <p className="text-xs text-gray-600">
                                    Total storage used: {totalSize} MB. You have plenty of space for more apps!
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InstalledApps;