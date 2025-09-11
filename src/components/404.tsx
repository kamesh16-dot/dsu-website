import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center px-4">
      <h1 className="text-9xl font-extrabold text-red-500 drop-shadow-lg animate-bounce">
        404
      </h1>
      <p className="text-2xl mt-4">Oops! Page not found 🚧</p>
      <p className="text-gray-400 mt-2 mb-6">
        The page you’re looking for doesn’t exist or was moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-red-500 text-white rounded-2xl shadow-lg hover:bg-red-600 transition transform hover:scale-105"
      >
        🔙 Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
