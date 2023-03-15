import React from 'react';

const Input = ({ className, ...props }) => (
  <input
    className={`mt-2 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm
     focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ${
       className || ''
     }}`}
    {...props}
  />
);

export default Input;
