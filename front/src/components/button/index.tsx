import React from 'react';

import './styles.css';

type Props = {
  label: string;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({ label, type = 'button', className, disabled = false }) => {
  return (
    <button type={type} className={`form-button ${className || ''} ${disabled ? 'disabled' : ''}`}>
      {label}
    </button>
  );
};

export default Button;
