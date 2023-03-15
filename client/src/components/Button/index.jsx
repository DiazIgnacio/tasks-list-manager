import React from 'react';

const Button = ({ variant = 'outlined', children, className, ...props }) => (
  <button
    className={`block w-full rounded-md border border-gray-300 py-2 px-3
     shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500
     sm:text-sm ${className || ''} ${
      variant === 'filled'
        ? ' bg-blue-500 text-white transition-all hover:bg-blue-600'
        : ''
    }`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
