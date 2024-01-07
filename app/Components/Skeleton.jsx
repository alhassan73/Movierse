import React from "react";

export default function Skeleton({ arr }) {
  return (
    <div className="flex  xl:justify-start flex-wrap gap-8 my-12 mx-auto">
      {arr.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full sm:w-[47%] md:w-[30%] lg:w-[31%] xl:w-[23%] bg-[#1c463685] p-3 rounded-xl trend relative cursor-pointer"
          >
            <div className="rate absolute top-4 left-4 z-20 bg-[#0b1b1485] p-1 rounded-xl w-12 min-h-8 animate-pulse"></div>
            <div className="image-container max-[400px]:h-[495.453px]  max-[500px]:h-[625.953px] h-[802.125px] sm:h-[433.422px]  md:h-[391.656px] lg:h-[498.062px] xl:h-[389.312px] bg-[#1c4636]  animate-pulse overflow-hidden rounded-xl"></div>
            <div className="min-h-3 w-36 bg-[#1c4636] mt-4 mx-auto rounded-xl animate-pulse"></div>
            <div className="min-h-3 w-24 bg-[#1c4636] mt-4 mx-auto rounded-xl animate-pulse"></div>
          </div>
        );
      })}
    </div>
  );
}
