import React, { useState } from 'react';
import { Menu, LogOut, User, Bell, ChevronDown } from 'lucide-react';

/**
 * Header Component
 * Displays the top navigation bar with:
 * - Hamburger menu (on mobile)
 * - Brand Name
 * - Notifications
 * - User Profile Dropdown
 * 
 * @param {function} onMenuClick - Callback when mobile menu button is clicked
 * @param {string} userName - Name of the currently logged-in user
 */
export default function Header({ onMenuClick, userName = 'John Doe' }) {
  // State to toggle the user dropdown menu
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    // Sticky header stays at the top when scrolling
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex justify-between items-center px-6 py-4">

        {/* Left Side: Menu Button & Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button (Hidden on Desktop 'md:hidden') */}
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors md:hidden"
          >
            <Menu size={24} className="text-gray-700" />
          </button>

          {/* Logo / Brand Name */}
          <h1 className="text-2xl font-bold text-gray-800">💰 Expense Manager</h1>
        </div>

        {/* Right Side: Icons & Profile */}
        <div className="flex items-center gap-6">

          {/* Notification Bell */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
            <Bell size={20} className="text-gray-600" />
            {/* Red Dot for unread notifications */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile Section */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <User size={20} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700 hidden sm:inline">{userName}</span>
              <ChevronDown size={16} className="text-gray-600" />
            </button>

            {/* Dropdown Menu (Conditionally Rendered) */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-lg">
                  👤 My Profile
                </a>
                <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  ⚙️ Settings
                </a>
                <hr className="my-2" />
                <a href="/login" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 last:rounded-b-lg flex items-center gap-2">
                  <LogOut size={16} /> Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
