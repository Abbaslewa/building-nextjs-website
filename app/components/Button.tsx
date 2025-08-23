"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`
        px-6 py-3 rounded-lg bg-yellow-400 text-gray-900 font-medium
        hover:bg-yellow-500 transition-colors
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
