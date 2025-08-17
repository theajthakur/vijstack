import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-background text-text shadow-glow">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img alt="Vijstack Logo" src="/logo.png" width={50} />
          </div>

          {/* Right: Links */}
          <div className="flex space-x-6 font-sans">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
