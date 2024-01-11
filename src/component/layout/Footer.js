import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer  bg-dark p-3 text-white text-center">
      All rights reserved &copy; AptronTechnology <br />
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/privacy">Privacy</Link>
      <Link to="/policy">Policy</Link>
    </div>
  );
};

export default Footer;
