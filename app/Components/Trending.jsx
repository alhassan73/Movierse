import Image from "next/image";
export default function Trending({ data }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <>
      <div className="flex flex-wrap">
        {data.map((item, index) => {
          return (
            <div key={index} className="">
              <div className="w-4/5 mx-auto">
                <Image
                  src={`${baseUrl}${item.poster_path}`}
                  width={300}
                  height={300}
                  className="w-full "
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
