import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar w-full h-16 bg-gray-800 text-white flex items-center justify-end px-4">
      <div className="links flex items-center gap-4">
        <Link to="/">Shop</Link>
        <Link to={"cart"}>
          <FaShoppingCart size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
