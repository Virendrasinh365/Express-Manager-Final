import React, { useState } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

/**
 * Dashboard Layout
 * Wraps all authenticated pages (Dashboard, Expenses, etc.).
 * Provides the consistent structure: Header top, Sidebar left, Content right.
 */
export default function DashboardLayout({ children }) {
  // State to control sidebar visibility on mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-50">

      {/* 1. Header (Top Navigation) */}
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      {/* 2. Main Area (Sidebar + Content) */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar (Navigation specific) */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content Area (Scrollable) */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            {/* The actual page content goes here */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
