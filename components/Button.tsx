import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ fullWidth = false, children, className = '', ...props }) => {
  return (
    <button
      className={`
        bg-neon hover:bg-neon-glow text-black font-display font-black uppercase tracking-wider
        py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(163,230,53,0.4)] hover:shadow-[0_0_30px_rgba(163,230,53,0.6)]
        transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0
        text-lg md:text-xl
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};