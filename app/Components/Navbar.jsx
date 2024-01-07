"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/play-button.png";
import Menu from "./Menu";
export default function Navbar() {
  const [toggler, setToggler] = useState(false);
  const links = [
    { name: "Movies" },
    { name: "Series" },
    { name: "Suggest me" },
  ];

  const handleClick = () => {
    setToggler(!toggler);
  };
  return (
    <>
      <nav className="py-4 inset-x-0 top-0  bg-black bg-opacity-30 backdrop-blur-[20px] fixed z-50">
        <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div
            className={`relative flex h-16 items-center justify-between ${
              toggler === true ? "menu-open" : ""
            }`}
            id="menu"
          >
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden px-3">
              <button
                className="btn-menu flex items-center justify-center min-h-[30px] px-0 border-[0] bg-transparent text-inherit cursor-pointer focus:outline-0"
                aria-controls="mobile-menu"
                aria-expanded={toggler}
                type="button"
                id="btn-menu"
                onClick={handleClick}
              >
                <i
                  className="btn-menu__bars block relative w-[36px] h-[4px] bg-[#4EFFBA]"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <Image className="h-10 w-auto" src={logo} alt="Movierse" />
              </div>
              <Menu type="normal" links={links} />
            </div>
          </div>
        </div>

        {toggler ? <Menu type="mobile" links={links} /> : ""}
      </nav>
    </>
  );
}
