import React from 'react';

/**
 * Statistics Card Component
 * Used on Dashboard to show key metrics (Income, Expense, Balance).
 * 
 * @param {string} label - The title of the stat (e.g. "Total Income")
 * @param {string|number} value - The actual value (e.g. "₹5000")
 * @param {component} icon - The icon component from lucide-react
 * @param {string} color - Theme color (blue, red, green, purple)
 * @param {object} trend - Optional trend info { type: 'up'|'down', value: string }
 */
export default function StatCard({ label, value, icon: Icon, color = 'blue', trend = null }) {
  // Map color names to Tailwind classes
  const colors = {
    blue: 'text-blue-600 bg-blue-50',
    red: 'text-red-600 bg-red-50',
    green: 'text-green-600 bg-green-50',
    purple: 'text-purple-600 bg-purple-50',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex justify-between items-start">
        {/* Left Side: Text Data */}
        <div>
          <p className="text-gray-600 text-sm font-medium">{label}</p>
          <h3 className="text-3xl font-bold text-gray-800 mt-2">{value}</h3>

          {/* Trend Indicator (optional) */}
          {trend && (
            <p className={`text-sm mt-2 ${trend.type === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {trend.type === 'up' ? '📈' : '📉'} {trend.value}
            </p>
          )}
        </div>

        {/* Right Side: Icon */}
        {Icon && <Icon className={`w-10 h-10 ${colors[color]}`} />}
      </div>
    </div>
  );
}
