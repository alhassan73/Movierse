"use client";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Components/DataProvider/DataProviderContext";
import Image from "next/image";
export default function MovieDetails({ params }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const [details, setDetails] = useState({});
  const { getDetails: getData } = useContext(DataContext);
  const id = params["id"];
  async function getDetails() {
    let res = await getData(id);
    setDetails(res);
  }
  useEffect(() => {
    getDetails();
  }, [id]);

  return (
    <div className="mt-12">
      <div className="">
        <Image
          src={`${baseUrl}${details?.backdrop_path}`}
          width={500}
          height={500}
          alt={
            details.title ||
            details.original_title ||
            details.name ||
            details.original_name ||
            "trending"
          }
        />
      </div>
    </div>
  );
}
