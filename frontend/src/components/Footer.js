import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center py-3 mt-auto">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} My PWA. All Rights Reserved.</p>
        <p className="mb-0">
          <a href="/privacy" className="text-white text-decoration-none">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="text-white text-decoration-none">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
