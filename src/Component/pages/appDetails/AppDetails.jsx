import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useApps from '../../hooks/useApps';
import { InstallAppsContext } from '../../../Context/InstallAppsContext';
import { toast } from 'react-toastify';
import { 
    FaDownload, 
    FaStar, 
    FaUser, 
    FaCloudDownloadAlt, 
    FaShareAlt, 
    FaFlag,
    FaAndroid,
    FaApple,
    FaWindows,
    FaCheckCircle,
    FaExclamationTriangle,
    FaArrowLeft
} from 'react-icons/fa';
import { MdReviews, MdSecurity, MdSpeed, MdUpdate } from 'react-icons/md';
import { Link } from 'react-router';

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loding } = useApps();
    const { installApps, setInstallApps } = useContext(InstallAppsContext);

    if (loding) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-indigo-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-flex items-center gap-3 bg-purple-100 px-6 py-3 rounded-full">
                        <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-purple-600 font-semibold">Loading app details...</span>
                    </div>
                </div>
            </div>
        );
    }

    const exptedApps = apps.find(app => String(app.id) === id);
    
    const handelInstallApp = () => {
        const isExist = installApps.find(app => app.id === exptedApps.id);
        if (isExist) {
            toast.warning(`${exptedApps.title} is already installed!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                icon: <FaExclamationTriangle />
            });
            return;
        }
        setInstallApps([...installApps, exptedApps]);
        toast.success(`${exptedApps.title} has been successfully installed!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            icon: <FaCheckCircle />
        });
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-indigo-50 py-8 md:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                
                {/* Back Button */}
                <Link to="/trending-apps" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6 group">
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-semibold">Back to Apps</span>
                </Link>

                {/* Main Content */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row gap-8 p-6 md:p-8 lg:p-10">
                        
                        {/* Left Column - Image */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-8">
                                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 mb-6 group">
                                    <img 
                                        className="w-full h-auto max-h-64 object-contain mx-auto transform group-hover:scale-105 transition-transform duration-500" 
                                        src={exptedApps.image} 
                                        alt={exptedApps.title}
                                    />
                                </div>
                                
                                {/* Platform Availability */}
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                        <FaCloudDownloadAlt className="text-purple-600" />
                                        Available on
                                    </h3>
                                    <div className="flex gap-3">
                                        <div className="flex-1 bg-white border border-gray-200 rounded-lg p-2 text-center hover:border-purple-500 transition-colors">
                                            <FaAndroid className="text-green-600 text-2xl mx-auto mb-1" />
                                            <span className="text-xs text-gray-600">Android</span>
                                        </div>
                                        <div className="flex-1 bg-white border border-gray-200 rounded-lg p-2 text-center hover:border-purple-500 transition-colors">
                                            <FaApple className="text-gray-800 text-2xl mx-auto mb-1" />
                                            <span className="text-xs text-gray-600">iOS</span>
                                        </div>
                                        <div className="flex-1 bg-white border border-gray-200 rounded-lg p-2 text-center hover:border-purple-500 transition-colors">
                                            <FaWindows className="text-blue-600 text-2xl mx-auto mb-1" />
                                            <span className="text-xs text-gray-600">Windows</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Details */}
                        <div className="lg:w-2/3">
                            {/* Title and Developer */}
                            <div className="mb-6">
                                <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                        {exptedApps.title}
                                    </h1>
                                    <div className="bg-purple-100 px-3 py-1 rounded-full">
                                        <span className="text-purple-600 font-semibold text-sm">v{exptedApps.version || '2.0.0'}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <FaUser className="text-purple-500" />
                                    <span>Developed by: <span className="font-semibold text-gray-800">{exptedApps.companyName}</span></span>
                                </div>
                            </div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 flex items-center gap-3">
                                    <div className="bg-purple-100 p-3 rounded-full">
                                        <FaDownload className="text-purple-600 text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Total Downloads</p>
                                        <p className="text-xl font-bold text-gray-800">{exptedApps.downloads}</p>
                                    </div>
                                </div>
                                
                                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 flex items-center gap-3">
                                    <div className="bg-yellow-100 p-3 rounded-full">
                                        <FaStar className="text-yellow-500 text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Rating</p>
                                        <p className="text-xl font-bold text-gray-800 flex items-center gap-1">
                                            {exptedApps.ratingAvg}
                                            <span className="text-sm text-gray-500">/5</span>
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 flex items-center gap-3">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <MdReviews className="text-blue-500 text-xl" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Reviews</p>
                                        <p className="text-xl font-bold text-gray-800">{exptedApps.reviews}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Install Button */}
                            <button 
                                onClick={handelInstallApp} 
                                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 mb-6 group"
                            >
                                <FaCloudDownloadAlt className="text-2xl group-hover:animate-bounce" />
                                <span>Install App ({exptedApps.size}) MB</span>
                            </button>

                            {/* Description */}
                            <div className="mb-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                                    <FaFlag className="text-purple-600" />
                                    About this app
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {exptedApps.description}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-3 text-sm text-gray-700">
                                    <MdSecurity className="text-green-500 text-xl" />
                                    <span>Secure & Safe</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700">
                                    <MdSpeed className="text-purple-500 text-xl" />
                                    <span>High Performance</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700">
                                    <MdUpdate className="text-blue-500 text-xl" />
                                    <span>Regular Updates</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-700">
                                    <FaShareAlt className="text-indigo-500 text-xl" />
                                    <span>Share with Friends</span>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="flex flex-wrap justify-between gap-4 text-sm">
                                    <div>
                                        <span className="text-gray-500">Last Updated:</span>
                                        <span className="ml-2 font-semibold text-gray-700">{exptedApps.lastUpdated || 'January 2024'}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Content Rating:</span>
                                        <span className="ml-2 font-semibold text-gray-700">Everyone</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Compatibility:</span>
                                        <span className="ml-2 font-semibold text-gray-700">Android 5.0+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;