import React from "react";

const Footer = () => {
  return (
    <footer className="pd-t-20 greyBackgColor">
      <ul className="footerFirstChild">
        <li>&copy; 2020 Airbnb, Inc. All rights reserved</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Sitemap</li>
      </ul>
      <ul className="footerSecondChild">
        <li>
          <i className="fas fa-globe"></i> English(CA)
        </li>
        <li>$ CAD</li>
        <li>
          <i className="fab fa-facebook"></i>
        </li>
        <li>
          <i className="fab fa-twitter"></i>
        </li>
        <li>
          <i className="fab fa-instagram"></i>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
