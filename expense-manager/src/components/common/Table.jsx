import React from 'react';
import { Edit2, Trash2, Eye } from 'lucide-react';

/**
 * Reusable Table Component
 * Displays data in rows and columns, with optional actions (Edit, Delete, View).
 * 
 * @param {array} columns - Array of column definitions { key, label, render }
 * @param {array} data - Array of data objects to display
 * @param {function} onEdit - Callback when edit button is clicked
 * @param {function} onDelete - Callback when delete button is clicked
 * @param {function} onView - Callback when view button is clicked
 * @param {boolean} loading - Show loading state
 * @param {string} emptyMessage - Message to show when data is empty
 */
export default function Table({
  columns = [],
  data = [],
  onEdit,
  onDelete,
  onView,
  loading = false,
  emptyMessage = 'No data found'
}) {
  // 1. Loading State
  if (loading) {
    return <div className="text-center py-8 text-gray-500">Loading...</div>;
  }

  // 2. Empty State
  if (data.length === 0) {
    return <div className="text-center py-8 text-gray-500">{emptyMessage}</div>;
  }

  // 3. Data Table
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full">
        {/* Table Header */}
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
              >
                {col.label}
              </th>
            ))}
            {/* Action Column (only if actions are provided) */}
            {(onEdit || onDelete || onView) && (
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Actions
              </th>
            )}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, idx) => (
            <tr key={row.id || idx} className="border-b hover:bg-gray-50 transition-colors">

              {/* Data Cells */}
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-4 py-3 text-sm text-gray-700"
                >
                  {/* If a custom 'render' function is provided, use it. Otherwise just show the data. */}
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}

              {/* Action Buttons */}
              {(onEdit || onDelete || onView) && (
                <td className="px-4 py-3 flex gap-2">
                  {onView && (
                    <button
                      onClick={() => onView(row)}
                      className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                      title="View"
                    >
                      <Eye size={16} />
                    </button>
                  )}
                  {onEdit && (
                    <button
                      onClick={() => onEdit(row)}
                      className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                      title="Edit"
                    >
                      <Edit2 size={16} />
                    </button>
                  )}
                  {onDelete && (
                    <button
                      onClick={() => onDelete(row.id || row)}
                      className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
