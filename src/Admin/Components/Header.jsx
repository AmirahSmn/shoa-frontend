import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { PiPowerFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function Header({ currentPage }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-between w-full bg-white px-9 py-11 border-2 ">
      <p className="text-4xl font-bold">{currentPage}</p>
      <div className="flex gap-9">
        <i className="text-4xl">
          <FaUserCircle />
        </i>
        <i className="text-4xl" onClick={handleLogout}>
          <PiPowerFill />
        </i>
      </div>
    </div>
  );
}

export default Header;
