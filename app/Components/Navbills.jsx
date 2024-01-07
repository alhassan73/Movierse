import React from "react";

export default function Navbills({ active, setActive, setCategory }) {
  const navbills = [
    { name: "All", endPoint: "all" },
    { name: "Movies", endPoint: "movie" },
    { name: "TV Shows", endPoint: "tv" },
  ];
  return (
    <div className="flex justify-evenly sm:justify-start items-center sm:w-fit gap-10 bg-[#1c463685] mt-12 rounded-xl p-2">
      {navbills.map((navbill, index) => (
        <div
          key={index}
          className={`p-4  cursor-pointer rounded-xl w-full sm:w-fit text-center ${
            active === navbill.name ? "active" : ""
          }`}
          onClick={() => {
            setActive(navbill.name);
            setCategory(navbill.endPoint);
          }}
        >
          <span className="font-bold">{navbill.name}</span>
        </div>
      ))}
    </div>
  );
}
