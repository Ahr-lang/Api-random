import { ReactNode } from 'react';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => (
  <button 
    onClick={onClick}
    style={{
      padding: '8px 16px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      margin: '4px',
    }}
  >
    {children}
  </button>
);