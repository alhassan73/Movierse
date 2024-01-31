import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 bg-[#03100b85] bg-opacity-30 backdrop-blur-[20px]">
      <div className="p-10 w-full text-center">
        <p>Personal project created by Alhassan Ahmed</p>
        <p>
          You Can Clone The repo at
          <a
            href="https://github.com/yourusername/projectname"
            className="text-[#4EFFBA]"
          >
            Github
          </a>
          .
        </p>
        <p>
          Copyrights &#169; <span className="text-[#4EFFBA]">2024</span>
        </p>
      </div>
    </footer>
  );
}
