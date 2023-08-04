import React from 'react';
import './header.css';

export const Header = ({ children }) => {
  return (
    <h2 className="header">
      { children }
    </h2>
  )
}

;