"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
export default function Menu({ type }) {
  const [animate, setAnimation] = useState("-100%");
  const links = [
    { name: "Movies" },
    { name: "TV Shows" },
    { name: "Suggest me" },
  ];
  useEffect(() => {
    setAnimation("0%");
  }, []);
  return (
    <>
      <div
        className={`${
          type === "mobile" ? "sm:hidden" : " hidden sm:ml-6 sm:block"
        }`}
        id={`${type === "mobile" ? "mobile-menu" : "normal-menu"}`}
      >
        <div
          className={`${
            type === "mobile" ? "space-y-1 px-2 pb-3 pt-2" : "flex space-x-4"
          }`}
        >
          {links.map((link, i) => (
            <Link
              key={i}
              href="#"
              style={{
                transform: `${
                  type === "mobile" ? `translateX(${animate})` : ""
                }`,
                transition: `${type === "mobile" ? `${(i + 1) / 2}s` : ""}`,
              }}
              className={`text-[#4EFFBA] rounded-md px-3 py-2 text-sm font-medium flex items-center gap-2 ${
                type === "mobile" ? "block" : ""
              }`}
            >
              {link.name}{" "}
              {i === 2 ? <i className="fa-solid fa-arrow-right-long"></i> : ""}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
