import Image from "next/image";
export default function Trending({ data }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <>
      <div className="flex justify-between flex-wrap gap-8 mt-12 mx-auto">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[23%] bg-[#1c463685] p-3 rounded-xl trend relative"
            >
              <div className="rate absolute top-4 left-4 z-20 bg-[#1c4636] p-1 rounded-xl">
                <i className="fa-regular fa-star me-1 text-amber-300"></i>
                {Math.round(item.vote_average * 10) / 10}
              </div>
              <div className="image-container h-[90%] overflow-hidden rounded-xl">
                <Image
                  src={`${baseUrl}${item.poster_path}`}
                  width={300}
                  height={300}
                  className="w-full h-full trend-img"
                  alt={
                    item.title ||
                    item.original_title ||
                    item.name ||
                    item.original_name
                  }
                />
              </div>
              <h2 className="text-center font-bold mt-3 ">
                {item.title?.split(" ").slice(0, 4).join(" ") ||
                  item.original_title?.split(" ").slice(0, 4).join(" ") ||
                  item.name?.split(" ").slice(0, 4).join(" ") ||
                  item.original_name?.split(" ").slice(0, 4).join(" ")}
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
