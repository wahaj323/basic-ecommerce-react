import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-4 sm:mb-0">
            <a
              href="/"
              className="text-white text-lg font-bold tracking-wide hover:text-indigo-300 transition-colors duration-300"
            >
              MyApp
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex space-x-6">
            <a
              href="/about"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-300"
            >
              Privacy
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;