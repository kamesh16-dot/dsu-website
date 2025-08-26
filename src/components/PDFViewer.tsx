import { useState } from "react";

const ImageViewer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Correct base path (works in local + deployed with base)
  const imageUrl = `${import.meta.env.BASE_URL}dsuac.jpeg`;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-400">
      <div className="w-full max-w-2xl text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Academic Calendar
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Access and download important academic documents
        </p>

        {/* File Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center space-y-6">
          {/* Icon + File Info */}
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-blue-100 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Academic Calendar 2024
              </h3>
              <p className="text-gray-500">Image File • JPEG</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Preview
            </button>

            <a
              href={imageUrl}
              download="academic-calendar-2024.jpeg"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-5xl flex flex-col h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold text-gray-800">
                Academic Calendar 2024
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 bg-gray-50 flex justify-center items-center overflow-auto">
              <img
                src={imageUrl}
                alt="Academic Calendar 2024"
                className="max-h-[80vh] w-auto rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
