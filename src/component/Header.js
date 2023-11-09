import React from 'react';
import profileImage from './NP.png';
import './Header.css'; // Import a CSS file for styling

const Header = () => {
  return (
    <header>
      <img src={profileImage} alt="Profile" class="round-image" /> {/* Add a class for styling */}
      <h1>Akash Das</h1>
      <p>Software Developer</p>
    </header>
  );
}

export default Header;
