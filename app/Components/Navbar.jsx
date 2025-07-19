import React from "react";

const navLinkClass =
  "font-[ClashDisplay] font-light px-4 py-1 rounded-full border border-transparent hover:border-white transition text-base";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-3 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/assets/Logo.png"
          alt="MACE 35 Logo"
          className="h-12"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-sm font-light tracking-wide">
        <a href="#home" className={navLinkClass}>Home</a>
        <a href="#about" className={navLinkClass}>About</a>
        <a href="#events" className={navLinkClass}>Events</a>
        <a href="#gallery" className={navLinkClass}>Gallery</a>
        <a href="#chapters" className={navLinkClass}>Chapters</a>
        <a href="#contacts" className={navLinkClass}>Contacts</a>

      </div>

      <div>
        <button className="border border-orange-500 text-[#F55800] hover:bg-orange-500 hover:text-black transition rounded-full px-5 py-1 font-semibold font-[ClashDisplay]" style={{ fontFamily: 'ClashDisplay', fontWeight: 600 }}>
          Join Us
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
