"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button className="bg-[#4effba] p-5 rounded-xl" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
