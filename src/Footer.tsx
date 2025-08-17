// Footer.tsx
import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full bg-gray-800 text-gray-300 p-4 text-center mt-auto">
    <p className="text-sm">&copy; {new Date().getFullYear()} AI Prototype | Your Name</p>
  </footer>
);

export default Footer;
