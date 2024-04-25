import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

const Comparison = () => {
  const location = useLocation();
  const { previewImage, selectedModel, caption, score } = location.state || {};
    const navigate = useNavigate();

    const handleRedirect = () => {
    navigate('/graph');
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 w-full">

          <div className="flex justify-center mb-8">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
              {previewImage ? (
                <img src={previewImage} alt="Preview" className="w-full h-auto object-cover" />
              ) : (
                <div className="p-8 text-center">
                  <p className="text-gray-800 text-lg font-semibold">No Image Uploaded</p>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <h2 className="text-white text-xl mb-6 font-semibold">Model</h2>
              <div className="w-56 h-20 bg-gray-800 rounded-lg shadow-md mb-6 flex justify-center items-center text-white">
                <p className="text-lg font-semibold">CNN Model 1</p>
              </div>
              <div className="w-56 h-20 bg-gray-800 rounded-lg shadow-md mb-6 flex justify-center items-center text-white">
                <p className="text-lg font-semibold">CNN Model 2</p>
              </div>
              <div className="w-56 h-20 bg-gray-800 rounded-lg shadow-md mb-6 flex justify-center items-center text-white">
                <p className="text-lg font-semibold">CNN Model 3</p>
              </div>
              <div className="w-56 h-20 bg-gray-800 rounded-lg shadow-md flex justify-center items-center text-white">
                <p className="text-lg font-semibold">CNN Model 4</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-white text-xl mb-6 font-semibold">Caption</h2>
              <div className="w-72 h-20 bg-gray-800 rounded-lg shadow-md mb-4 flex justify-center items-center text-white">
                <p className="text-md font-semibold">{selectedModel === 'Model 1' ? caption : ''}</p>
              </div>
              <div className="w-72 h-20 bg-gray-800 rounded-lg shadow-md mb-4 flex justify-center items-center text-white">
                <p className="text-md font-semibold">{selectedModel === 'Model 2' ? caption : ''}</p>
              </div>
              <div className="w-72 h-20 bg-gray-800 rounded-lg shadow-md mb-4 flex justify-center items-center text-white">
                <p className="text-md font-semibold">{selectedModel === 'Model 3' ? caption : ''}</p>
              </div>
              <div className="w-72 h-20 bg-gray-800 rounded-lg shadow-md flex justify-center items-center text-white">
                <p className="text-md font-semibold">{selectedModel === 'Model 4' ? caption : ''}</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-white text-xl mb-6 font-semibold">Probability Score</h2>
              <div className="w-72 h-20 bg-gray-800 rounded-lg shadow-md mb-4 flex justify-center items-center text-white">
                <p className="text-md font-semibold">{selectedModel === 'Model 1' ? score : ''}</p>
              </div>
              <div className="w-72 h-20 bg-gray-800 rounded-lg shadow-md mb-4 flex justify-center items-center text-white">
                <p className="text-md font-semibold">{selectedModel === 'Model 2' ? score : ''}</p>
              </div>
              <div className="w-72 h-20 bg-gray-800 rounded-lg shadow-md mb-4 flex justify-center items-center text-white">
                <p className="text-md font-semibold">{selectedModel === 'Model 3' ? score : ''}</p>
              </div>
              <div className="w-72 h-20 bg-gray-800 rounded-lg shadow-md flex justify-center items-center text-white">
                <p className="text-md font-semibold">{selectedModel === 'Model 4' ? score : ''}</p>
              </div>
            </div>

            <div className="fixed bottom-6 right-6">
          <button
            className="bg-green-500 text-white rounded-full p-4 flex items-center justify-center space-x-2 shadow-lg hover:bg-green-600 transition duration-300"
            onClick={handleRedirect}
          >
            <span>Graph</span>
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comparison;
