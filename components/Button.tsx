import React from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  disabled = false,
}) => {
  const baseClasses =
    'px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center gap-2 focus:outline-none';

  const variantClasses = {
    primary: 'bg-yellow-400 hover:bg-yellow-500 text-black disabled:bg-gray-600',
    secondary: 'border-2 border-gray-600 hover:bg-gray-900 text-white disabled:opacity-50',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};
