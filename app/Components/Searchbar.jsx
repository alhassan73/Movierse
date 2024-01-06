import React from "react";

export default function Searchbar() {
  return (
    <div className="w-full md:w-3/4 lg:w-1/2   flex flex-col justify-center items-center gap-7 mt-10">
      <div className="text-[#4effba]">
        <h1 className="text-6xl md:text-7xl  font-bold ">MOVIERSE</h1>
        <p className="text-sm md:text-base">
          Welcome to a universe of cinematic delights , Whether you&apos;re a
          fan of thrilling blockbusters, heartwarming dramas, or binge-worthy TV
          series, you&apos;re in for a treat 🎬
        </p>
      </div>
      <div className="flex w-full justify-between items-center search-container focus-within:border-[#4effba] border bg-black p-5 rounded-lg shadow-sm relative bg-transparent">
        <button className="border-0 outline-0">
          <i className="fa-solid fa-magnifying-glass search-icon hover:text-[#4effba] text-white "></i>
        </button>
        <input
          type="text"
          placeholder="Ex : Oppenheimer."
          className="search-input absolute right-0 inset-y-1 border-0  outline-0 left-[10%] bg-black w-[90%] placeholder:text-transparent placeholder:text-[15px]  ps-8  bg-transparent"
          id="searchInput"
        />
        <label
          htmlFor="searchInput"
          className="absolute cursor-text  top-[26%] left-[15%] search-label text-zinc-400"
        >
          Search your favorite
        </label>
      </div>
    </div>
  );
}
