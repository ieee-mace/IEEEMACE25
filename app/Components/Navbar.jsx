import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/logo.png" // Replace with your actual logo path
          alt="35 Years MACE"
          className="h-10"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-sm font-light tracking-wide">
        <button className="border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">
          Home
        </button>
        <a href="#about" className="hover:text-orange-400">About</a>
        <a href="#events" className="hover:text-orange-400">Events</a>
        <a href="#gallery" className="hover:text-orange-400">Gallery</a>
        <a href="#chapters" className="hover:text-orange-400">Chapters</a>
        <a href="#contacts" className="hover:text-orange-400">Contacts</a>
      </div>

      {/* Join Us Button */}
      <div>
        <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition rounded-full px-5 py-1 font-semibold">
          Join Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
