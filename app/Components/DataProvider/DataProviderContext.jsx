"use client";
import React, { createContext } from "react";

export const DataContext = createContext();
export default function DataProviderContext({ children }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzhkYjM5NWE2MTI5NmFiNGE3MWJjZmUzZTAwZTAxNSIsInN1YiI6IjY1MDM4MTAzNjNhYWQyMDBjNDRlODg1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FHQe6Knsce9-wItLu9t1lYluQL63KVRcID63STYl6Mo",
    },
    cache: "force-cache",
  };
  function getTrending(category, page) {
    return fetch(
      `https://api.themoviedb.org/3/trending/${category}/week?language=en-US&page=${page}`,
      options
    )
      .then((res) => res.json())
      .catch((err) => err);
  }
  function getDetails(id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then((res) => res.json())
      .catch((err) => err);
  }
  return (
    <DataContext.Provider value={{ getTrending, getDetails }}>
      {children}
    </DataContext.Provider>
  );
}
