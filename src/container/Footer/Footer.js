import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="ruby-blog__footer-container">
      <div className="ruby-blog__footer-container-head">
        Made by &nbsp;<a href="https://sosamson.com" target = "_blank" 
rel = "noopener noreferrer">Samson Sanyaolu</a>
      </div>
      <div className="ruby-blog__footer-container-copyright">
      © {new Date().getFullYear()} <span>Sosamson Blog</span>. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
