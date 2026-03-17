import React from 'react';
import { X } from 'lucide-react';

/**
 * Modal Dialog Component
 * Displays content in a popup overlay.
 * 
 * @param {boolean} isOpen - Whether the modal is visible
 * @param {function} onClose - function to close the modal
 * @param {string} title - Modal header title
 * @param {string} size - Width of the modal (sm, md, lg, xl)
 */
export default function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  // If not open, render nothing (null)
  if (!isOpen) return null;

  // Map sizes to Tailwind max-width classes
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  return (
    // Overlay (Background dimmer)
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">

      {/* Modal Card */}
      <div className={`bg-white rounded-lg shadow-xl ${sizes[size]} w-full`}>

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
