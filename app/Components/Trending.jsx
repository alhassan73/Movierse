import Image from "next/image";
export default function Trending({ data }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <>
      <div className="flex justify-between flex-wrap gap-8 mt-12 mx-auto">
        {data?.map((item, index) => {
          return (
            <div key={index} className="w-[23%] bg-[#1c463685] p-3 rounded-lg">
              <div className="image-container h-[90%] overflow-hidden rounded-lg">
                <Image
                  src={`${baseUrl}${item.poster_path}`}
                  width={300}
                  height={300}
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-center font-bold mt-3 ">
                {item.title?.split(" ").slice(0, 4).join(" ") ||
                  item.original_title?.split(" ").slice(0, 4).join(" ") ||
                  item.name?.split(" ").slice(0, 4).join(" ") ||
                  original_name?.split(" ").slice(0, 4).join(" ")}
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
