// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/chapter1">Chapter 1</Link></li>
          {/* Add more navigation links for other chapters */}
        </ul>
      </nav>
    </header>
  );
};

export default Header; // Lägg till export här
