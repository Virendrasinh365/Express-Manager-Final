import React from 'react';

/**
 * Reusable Form Input Component
 * Handles Input, Textarea, and Select fields.
 * 
 * @param {string} label - Input label text
 * @param {string} name - Input name attribute
 * @param {string} type - Input type (text, password, email, textarea, select, etc.)
 * @param {string} value - Current value
 * @param {function} onChange - Function to handle value changes
 * @param {string} error - Error message to display (if any)
 * @param {array} options - Options for select dropdown (only if type='select')
 */
export default function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  disabled = false,
  options = [],
  rows,
  ...props
}) {
  return (
    <div className="mb-4">
      {/* Label Section */}
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}



      {/* 1. TEXTAREA (for long text) */}
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows || 4}
          className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
            }`}
          {...props}
        />
      ) : type === 'select' ? (
        // 2. DROP DOWN (Select)
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
            }`}
          {...props}
        >
          <option value="">Select {label}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        // 3. REGULAR INPUT (text, password, number, email...)
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:bg-gray-100 disabled:cursor-not-allowed ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
            }`}
          {...props}
        />
      )}

      {/* Error Message */}
      {error && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
    </div>
  );
}
