import React from 'react';
import './Default.css'; // Import the CSS file for styling

const Default = ({ children }) => {
  return (
    <div className="default-layout">
      <header>
        {/* Add your header content here */}
        <h1>Tennis App</h1>
      </header>
      <main>{children}</main>
      <footer>
        {/* Add your footer content here */}
        <p>&copy; {new Date().getFullYear()} Tennis App</p>
      </footer>
    </div>
  );
};

export default Default;
