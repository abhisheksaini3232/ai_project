
import React from "react";

const Header: React.FC = () => (
  <header className="w-full bg-blue-600 text-white p-4 shadow-md flex items-center justify-between">
    <h1 className="text-xl md:text-2xl font-semibold">AI Platform Prototype</h1>
    <div className="hidden md:block"> {/* Optional Extra elements */}</div>
  </header>
);

export default Header;
