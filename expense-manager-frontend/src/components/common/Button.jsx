import React from 'react';

/**
 * Reusable Button Component
 * 
 * @param {string} children - Content to be displayed inside the button (e.g., text, icons)
 * @param {function} onClick - Function called when button is clicked
 * @param {string} type - Button type (button, submit, reset)
 * @param {string} variant - Visual style (primary, secondary, danger, success, outline)
 * @param {string} size - Size of the button (sm, md, lg)
 * @param {boolean} disabled - Whether the button is disabled
 * @param {boolean} fullWidth - If true, button takes full width of container
 */
export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  className = '',
  ...props
}) {
  // Base styles shared by all buttons
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed';

  // Styles for different visual variants
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
    success: 'bg-green-600 text-white hover:bg-green-700 active:bg-green-800',
    outline: 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100',
  };

  // Styles for different sizes
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Combine all classes dynamically

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full justify-center' : ''} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}