import React from 'react';
import { Link } from 'react-router';
import { FaHome, FaFrown, FaQuestionCircle, FaEnvelope, FaNewspaper, FaHeadset } from 'react-icons/fa';
import { BiErrorCircle } from 'react-icons/bi';

const Notfound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 transform transition-all duration-500 animate-fade-in-up">
                
                {/* Error Code with Animation */}
                <div className="flex justify-center items-center gap-2 md:gap-4 mb-8">
                    <span className="text-7xl md:text-9xl font-black text-purple-600 animate-bounce">4</span>
                    <div className="relative">
                        <div className="text-7xl md:text-9xl text-purple-600 relative">
                            <BiErrorCircle className="animate-pulse" />
                        </div>
                        <FaFrown className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl md:text-3xl" />
                    </div>
                    <span className="text-7xl md:text-9xl font-black text-purple-600 animate-bounce delay-100">4</span>
                </div>

                {/* Title and Message */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
                    Page Not Found
                </h1>
                <p className="text-gray-600 text-center text-base md:text-lg leading-relaxed mb-8 px-2">
                    Oops! The page you're looking for seems to have wandered off into the digital wilderness.
                    <br />
                    <span className="text-sm text-gray-500 mt-2 block">
                        Error 404 - Resource not found
                    </span>
                </p>

                {/* Home Button */}
                <div className="flex justify-center mb-10">
                    <Link to="/">
                        <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
                            <FaHome className="text-xl group-hover:animate-bounce" />
                            Go Back Home
                        </button>
                    </Link>
                </div>

                {/* Helpful Links Section */}
                <div className="border-t border-gray-200 pt-8">
                    <p className="text-gray-500 text-center text-sm mb-4 flex items-center justify-center gap-2">
                        <FaQuestionCircle className="text-purple-500" />
                        You might find these helpful:
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        <Link 
                            to="/about" 
                            className="group flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-purple-50 text-gray-700 hover:text-purple-600 rounded-lg transition-all duration-300 text-sm font-medium"
                        >
                            <FaNewspaper className="text-purple-500 group-hover:rotate-6 transition-transform" />
                            About Us
                        </Link>
                        <Link 
                            to="/contact" 
                            className="group flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-purple-50 text-gray-700 hover:text-purple-600 rounded-lg transition-all duration-300 text-sm font-medium"
                        >
                            <FaEnvelope className="text-purple-500 group-hover:scale-110 transition-transform" />
                            Contact
                        </Link>
                        <Link 
                            to="/blog" 
                            className="group flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-purple-50 text-gray-700 hover:text-purple-600 rounded-lg transition-all duration-300 text-sm font-medium"
                        >
                            <FaNewspaper className="text-purple-500 group-hover:rotate-6 transition-transform" />
                            Blog
                        </Link>
                        <Link 
                            to="/support" 
                            className="group flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-purple-50 text-gray-700 hover:text-purple-600 rounded-lg transition-all duration-300 text-sm font-medium"
                        >
                            <FaHeadset className="text-purple-500 group-hover:scale-110 transition-transform" />
                            Support
                        </Link>
                    </div>
                </div>

                {/* Search Suggestion */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-400">
                        Need immediate assistance? 
                        <Link to="/contact" className="text-purple-500 hover:text-purple-700 ml-1 font-medium">
                            Contact support →
                        </Link>
                    </p>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out;
                }
                .delay-100 {
                    animation-delay: 100ms;
                }
            `}</style>
        </div>
    );
};

export default Notfound;