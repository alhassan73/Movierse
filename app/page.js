"use client";
import { useEffect, useState } from "react";
import Trending from "./Components/Trending";
export default function Home() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState("All");
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setLoader] = useState(false);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzhkYjM5NWE2MTI5NmFiNGE3MWJjZmUzZTAwZTAxNSIsInN1YiI6IjY1MDM4MTAzNjNhYWQyMDBjNDRlODg1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FHQe6Knsce9-wItLu9t1lYluQL63KVRcID63STYl6Mo",
    },
    cache: "force-cache",
  };
  const getData = async () => {
    setLoader(true);
    let res = await fetch(
      `https://api.themoviedb.org/3/trending/${category}/week?language=en-US&page=${page}`,
      options
    );
    let { results } = await res.json();

    setTimeout(() => {
      setData(results);
      setLoader(false);
    }, 3000);
  };
  useEffect(() => {
    getData();
  }, [category, page]);
  return (
    <>
      <Trending
        data={data}
        setData={setData}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        setActive={setActive}
        active={active}
        setCategory={setCategory}
        isLoading={isLoading}
        page={page}
        setPage={setPage}
      />
    </>
  );
}
