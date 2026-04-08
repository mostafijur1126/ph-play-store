import React, { useState } from 'react';
import useApps from '../../hooks/useApps';
import AppCard from '../../Ui/AppCard';
import { FaSearch, FaFilter, FaSortAmountDown, FaSortAmountUp, FaTimes } from 'react-icons/fa';
import { MdApps, MdTrendingUp, MdNewReleases } from 'react-icons/md';

const Apps = () => {
    const { apps, loding } = useApps();
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('default');
    const [filterBy, setFilterBy] = useState('all');
    const [showFilters, setShowFilters] = useState(false);

    // Get unique categories from apps
    const categories = ['all', ...new Set(apps.map(app => app.category || 'General'))];

    // Filter apps based on search term and category
    const filteredApps = apps.filter(app => {
        const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             (app.companyName && app.companyName.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesFilter = filterBy === 'all' || (app.category === filterBy);
        return matchesSearch && matchesFilter;
    });

    // Sort apps
    const sortedApps = [...filteredApps].sort((a, b) => {
        if (sortBy === 'downloads') {
            return parseInt(b.downloads) - parseInt(a.downloads);
        } else if (sortBy === 'rating') {
            return parseFloat(b.ratingAvg) - parseFloat(a.ratingAvg);
        } else if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-indigo-50 py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
                        <MdApps className="text-xl" />
                        <span className="text-sm font-semibold">App Collection</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our{' '}
                        <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                            All Applications
                        </span>
                    </h1>
                    
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Discover our complete collection of innovative apps designed to enhance your digital experience
                    </p>
                </div>

                {/* Search and Filter Bar */}
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search Input */}
                        <div className="flex-1 relative">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search apps by name or developer..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                            />
                            {searchTerm && (
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    <FaTimes />
                                </button>
                            )}
                        </div>

                        {/* Filter and Sort Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors font-semibold text-gray-700"
                            >
                                <FaFilter />
                                Filters
                            </button>
                            
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 font-semibold text-gray-700 cursor-pointer"
                            >
                                <option value="default">Sort by: Default</option>
                                <option value="downloads">Sort by: Most Downloaded</option>
                                <option value="rating">Sort by: Highest Rated</option>
                                <option value="title">Sort by: Title A-Z</option>
                            </select>
                        </div>
                    </div>

                    {/* Filter Chips */}
                    {showFilters && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex flex-wrap gap-2">
                                <span className="text-sm font-semibold text-gray-600 mr-2">Categories:</span>
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setFilterBy(category)}
                                        className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
                                            filterBy === category
                                                ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Results Info */}
                <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
                    <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                        <MdApps className="text-purple-600" />
                        <span className="text-purple-600 font-semibold">
                            {sortedApps.length} App{sortedApps.length !== 1 ? 's' : ''} Found
                        </span>
                    </div>
                    
                    {searchTerm && (
                        <div className="text-sm text-gray-500">
                            Searching for: <span className="font-semibold text-purple-600">"{searchTerm}"</span>
                        </div>
                    )}
                </div>

                {/* Apps Grid */}
                {loding ? (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center gap-3 bg-purple-100 px-6 py-3 rounded-full">
                            <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-purple-600 font-semibold">Loading amazing apps...</span>
                        </div>
                    </div>
                ) : sortedApps.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {sortedApps.map((app, index) => (
                                <AppCard key={app.id} index={index} app={app} />
                            ))}
                        </div>
                        
                        {/* Load More Button (Optional) */}
                        {sortedApps.length > 9 && (
                            <div className="text-center mt-12">
                                <button className="group bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto shadow-lg hover:shadow-xl">
                                    <span>Load More Apps</span>
                                    <FaSortAmountDown className="group-hover:translate-y-1 transition-transform" />
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    // No Results State
                    <div className="text-center py-16 md:py-24">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-purple-100 rounded-full mb-6">
                            <FaSearch className="text-4xl text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No Apps Found</h3>
                        <p className="text-gray-500 mb-6 max-w-md mx-auto">
                            We couldn't find any apps matching your search criteria. Try adjusting your filters or search term.
                        </p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setFilterBy('all');
                                setSortBy('default');
                            }}
                            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl"
                        >
                            <FaTimes />
                            Clear All Filters
                        </button>
                    </div>
                )}

                {/* Trending Badge */}
                {!loding && sortedApps.length > 0 && (
                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-4 bg-white rounded-full shadow-lg px-6 py-3">
                            <div className="flex items-center gap-2">
                                <MdTrendingUp className="text-purple-600 text-xl" />
                                <span className="text-sm font-semibold text-gray-700">Trending Now</span>
                            </div>
                            <div className="w-px h-4 bg-gray-300"></div>
                            <div className="flex items-center gap-2">
                                <MdNewReleases className="text-green-500 text-xl" />
                                <span className="text-sm font-semibold text-gray-700">New Arrivals Daily</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Apps;