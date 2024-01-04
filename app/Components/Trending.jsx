"use client";
import { useEffect, useState } from "react";
export default function Trending() {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzhkYjM5NWE2MTI5NmFiNGE3MWJjZmUzZTAwZTAxNSIsInN1YiI6IjY1MDM4MTAzNjNhYWQyMDBjNDRlODg1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FHQe6Knsce9-wItLu9t1lYluQL63KVRcID63STYl6Mo",
    },
  };
  const getData = async () => {
    let res = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      options
    );
    let { results } = await res.json();
    setData(results);
  };
  useEffect(() => {}, [getData()]);
  return (
    <>
      <div className="flex flex-row">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
