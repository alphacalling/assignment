
import React from "react";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-2">Oops! Page Not Found</p>
            <p className="text-gray-500 mb-6">
                The page you are looking for might have been removed,
                had its name changed, or is temporarily unavailable.
            </p>
            <img 
                src="https://media.istockphoto.com/id/1031867638/vector/oops-looks-like-you-r-lost.jpg?s=612x612&w=0&k=20&c=74hkQsQovL41iTaguifE8_-ORPOkm3no0NV-0bEy2lE="
                alt="Not Found"
                className="mb-4 rounded shadow-lg"
            />
            <a 
                href="/" 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
                Go Back Home
            </a>
        </div>
    );
};

export default NotFound;
