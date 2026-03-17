import React from 'react';

/**
 * Reusable Card Component
 * Used to display content in a box with shadow and white background.
 * 
 * @param {string} title - Optional title to display at the top of the card
 * @param {node} children - content to display inside the card
 */
export default function Card({ children, className = '', title = '' }) {
  return (
    <div className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 mb-6 ${className}`}>
      {/* Only render title if it exists */}
      {title && <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>}

      {/* children eltle ke game te react na component render kare */}
      {children} 
            </div>
  );
}
