import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h1>
            <div><span className="vertical">The</span>Siren</div>
        </h1>
        <p>All in one blog, bringing you the best of entertainment,knowledge and inspiration</p>
        <p>&copy; {new Date().getFullYear()} The Siren. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
