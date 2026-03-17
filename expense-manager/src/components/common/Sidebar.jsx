import React from 'react';
import {
  BarChart3,
  Users,
  Settings,
  FileText,
  Wallet,
  TrendingUp,
  FolderOpen,
  Tag,
  X,
  Home,
  DollarSign,
} from 'lucide-react';

// Define the menu items in an array for easy management
// This makes it easy to add/remove links without changing the JSX logic.
const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Wallet, label: 'Expenses', path: '/expenses' },
  { icon: DollarSign, label: 'Income', path: '/income' },
  { icon: BarChart3, label: 'Reports', path: '/reports' },
  { icon: Tag, label: 'Categories', path: '/categories' },
  { icon: Users, label: 'People', path: '/people' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

/**
 *{type} and var define karya chhe for responsive design
 * 
 * @param {boolean} isOpen - Controls visibility on mobile
 * @param {function} onClose - Function to close the sidebar on mobile
 */
export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile Overlay: Darkens the background when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed md:relative w-64 h-screen bg-white border-r border-gray-200 overflow-y-auto transition-transform duration-300 z-40 md:z-0 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
      >
        <div className="p-6">
          {/* Close Button (Mobile Only) */}
          <button
            onClick={onClose}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg mb-4 float-right"
          >
            <X size={24} />
          </button>

          {/* Navigation Links */}
          <nav className="space-y-2 clear-both">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all group"
              >
                {/* Dynamically render the icon component */}
                <item.icon size={20} />
                {item.label} </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
