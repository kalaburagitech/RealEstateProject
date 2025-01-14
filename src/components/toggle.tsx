'use client'  

import React, { useState } from 'react';

interface ToggleProps {
  title: string;
  content: string;
}

const Toggle: React.FC<ToggleProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <div
        className={`flex justify-between items-center p-4 cursor-pointer ${isOpen ? 'bg-gray-100' : 'bg-white'}`}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        aria-expanded={isOpen}
        aria-controls="toggle-content"
        tabIndex={0}
      >
        <span className="text-lg font-medium">{title}</span>
        <span className="ml-4">
          {isOpen ? (
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              fill="currentColor"
            >
              <path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192 512"
              fill="currentColor"
            >
              <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
            </svg>
          )}
        </span>
      </div>
      {isOpen && (
        <div
          id="toggle-content"
          className="p-4 bg-gray-50 text-gray-700"
          role="region"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Toggle;
