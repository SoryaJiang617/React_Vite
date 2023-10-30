import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            CARPORT &nbsp;
            <span className="sm:block hidden"> | React Framework</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};
