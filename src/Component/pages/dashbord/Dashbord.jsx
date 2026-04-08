import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';
import { InstallAppsContext } from '../../../Context/InstallAppsContext';
import useApps from '../../hooks/useApps';
import { 
    FaDownload, 
    FaStar, 
    FaUsers, 
    FaMobile, 
    FaChartLine, 
    FaCheckCircle, 
    FaTimesCircle,
    FaArrowUp,
    FaArrowDown,
    FaAppStore,
    FaGooglePlay
} from 'react-icons/fa';
import { MdTrendingUp, MdTrendingDown, MdApps, MdInstallMobile, MdReviews } from 'react-icons/md';

const Dashbord = () => {
    const { installApps } = useContext(InstallAppsContext);
    const { apps } = useApps();
    const unInstallApps = apps.length - installApps.length;
    
    // Calculate statistics
    const totalDownloads = apps.reduce((sum, app) => sum + parseInt(app.downloads) || 0, 0);
    const totalRatings = apps.reduce((sum, app) => sum + parseFloat(app.ratingAvg) || 0, 0);
    const avgRating = (totalRatings / apps.length).toFixed(1);
    const installRate = ((installApps.length / apps.length) * 100).toFixed(1);
    
    // Data for pie chart
    const pieData = [
        { name: 'Installed', value: installApps.length, fill: '#8b5cf6' },
        { name: 'Not Installed', value: unInstallApps, fill: '#c084fc' },
    ];
    
    // Sample data for bar chart (top apps by downloads)
    const topApps = apps.slice(0, 5).map(app => ({
        name: app.title.length > 10 ? app.title.slice(0, 10) + '...' : app.title,
        downloads: parseInt(app.downloads) || 0,
        rating: parseFloat(app.ratingAvg) || 0
    }));
    
    // Sample data for monthly trend
    const monthlyData = [
        { month: 'Jan', downloads: 1200, installs: 800 },
        { month: 'Feb', downloads: 1900, installs: 1200 },
        { month: 'Mar', downloads: 2400, installs: 1800 },
        { month: 'Apr', downloads: 2800, installs: 2200 },
        { month: 'May', downloads: 3200, installs: 2600 },
        { month: 'Jun', downloads: 3800, installs: 3100 },
    ];
    
    const COLORS = ['#8b5cf6', '#c084fc', '#a855f7', '#d946ef', '#e879f9'];
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-indigo-50 py-8 md:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
                        <FaChartLine className="text-lg" />
                        <span className="text-sm font-semibold">Analytics Dashboard</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        App{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                            Dashboard
                        </span>
                    </h1>
                    
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Track your app performance, installations, and user engagement metrics
                    </p>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Total Apps */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-purple-100 p-3 rounded-full">
                                <MdApps className="text-2xl text-purple-600" />
                            </div>
                            <span className="text-green-500 flex items-center gap-1 text-sm">
                                <FaArrowUp />
                                +12%
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{apps.length}</h3>
                        <p className="text-gray-500 text-sm">Total Applications</p>
                    </div>
                    
                    {/* Total Downloads */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                                <FaDownload className="text-2xl text-blue-600" />
                            </div>
                            <span className="text-green-500 flex items-center gap-1 text-sm">
                                <FaArrowUp />
                                +8%
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{totalDownloads.toLocaleString()}</h3>
                        <p className="text-gray-500 text-sm">Total Downloads</p>
                    </div>
                    
                    {/* Average Rating */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-yellow-100 p-3 rounded-full">
                                <FaStar className="text-2xl text-yellow-500" />
                            </div>
                            <span className="text-green-500 flex items-center gap-1 text-sm">
                                <FaArrowUp />
                                +5%
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-1">
                            {avgRating}
                            <span className="text-sm text-gray-500">/5</span>
                        </h3>
                        <p className="text-gray-500 text-sm">Average Rating</p>
                    </div>
                    
                    {/* Installation Rate */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center justify-between mb-4">
                            <div className="bg-green-100 p-3 rounded-full">
                                <MdInstallMobile className="text-2xl text-green-600" />
                            </div>
                            <span className="text-green-500 flex items-center gap-1 text-sm">
                                <FaArrowUp />
                                +15%
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">{installRate}%</h3>
                        <p className="text-gray-500 text-sm">Installation Rate</p>
                    </div>
                </div>
                
                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    
                    {/* Pie Chart - Installation Status */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <MdInstallMobile className="text-purple-600" />
                            Installation Status
                        </h2>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius="60%"
                                        outerRadius="80%"
                                        paddingAngle={5}
                                        dataKey="value"
                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex justify-center gap-6 mt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                                <span className="text-sm text-gray-600">Installed: {installApps.length}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
                                <span className="text-sm text-gray-600">Not Installed: {unInstallApps}</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Bar Chart - Top Apps */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <FaChartLine className="text-purple-600" />
                            Top Apps by Downloads
                        </h2>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={topApps}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="downloads" fill="#8b5cf6" radius={[10, 10, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    
                    {/* Line Chart - Monthly Trend */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 lg:col-span-2">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <MdTrendingUp className="text-purple-600" />
                            Monthly Performance Trend
                        </h2>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={monthlyData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="downloads" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6' }} />
                                    <Line type="monotone" dataKey="installs" stroke="#c084fc" strokeWidth={2} dot={{ fill: '#c084fc' }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                
                {/* Recent Activity / Top Rated Apps */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Top Rated Apps */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <FaStar className="text-yellow-500" />
                            Top Rated Apps
                        </h2>
                        <div className="space-y-4">
                            {apps.slice(0, 5).map((app, index) => (
                                <div key={app.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-purple-50 transition-all duration-300">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center font-bold text-purple-600">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">{app.title}</p>
                                            <p className="text-xs text-gray-500">{app.companyName}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-yellow-500" />
                                        <span className="font-semibold">{app.ratingAvg}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Platform Distribution */}
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <FaMobile className="text-purple-600" />
                            Platform Distribution
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                        <FaGooglePlay className="text-green-600" />
                                        Android
                                    </span>
                                    <span className="text-sm text-gray-600">65%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                        <FaAppStore className="text-blue-600" />
                                        iOS
                                    </span>
                                    <span className="text-sm text-gray-600">30%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                        <FaDownload className="text-purple-600" />
                                        Both
                                    </span>
                                    <span className="text-sm text-gray-600">5%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '5%' }}></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Quick Stats */}
                        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-xs text-gray-500">Total Reviews</p>
                                    <p className="text-xl font-bold text-gray-800">12,847</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Active Users</p>
                                    <p className="text-xl font-bold text-gray-800">8,234</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">Growth Rate</p>
                                    <p className="text-xl font-bold text-green-600 flex items-center gap-1">
                                        <FaArrowUp />
                                        +23%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Summary Footer */}
                <div className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <h3 className="text-lg font-bold">Dashboard Summary</h3>
                            <p className="text-purple-200 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
                        </div>
                        <div className="flex gap-6">
                            <div className="text-center">
                                <p className="text-2xl font-bold">{apps.length}</p>
                                <p className="text-xs text-purple-200">Total Apps</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold">{installApps.length}</p>
                                <p className="text-xs text-purple-200">Installed</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold">{installRate}%</p>
                                <p className="text-xs text-purple-200">Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;