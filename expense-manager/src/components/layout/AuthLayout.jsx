import React from 'react';

/**
 * Authentication Layout
 * Wraps Login and Register pages.
 * Provides a centered card on a gradient background.
 */
export default function AuthLayout({ children }) {
  return (
    // Full screen container with gradient background
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-600 to-blue-800 p-4">

      {/* Centered White Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">

        {/* Logo/Header of the Form */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">💰 Expense Manager</h1>
        </div>

        {/* Child Components (Login Form, etc.) will render here */}
        {children}
      </div>
    </div>
  );
}
