import Image from "next/image";
import Searchbar from "./Searchbar";
import Navbills from "./Navbills";
import Skeleton from "./Skeleton";
export default function Trending({
  data,
  setSearchQuery,
  searchQuery,
  active,
  setActive,
  setCategory,
  isLoading,
  page,
  setPage,
}) {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const searchTrending = () => {
    const filteredData = data?.filter((el) => {
      return (
        el.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        el.original_title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        el.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        el.original_name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    return filteredData;
  };
  const handlePageChange = (pageRate) => {
    page === 1 && pageRate === -1 ? setPage(page) : setPage(page + pageRate);
  };

  return (
    <>
      <Searchbar handleSearch={handleSearch} />
      <Navbills
        setActive={setActive}
        setCategory={setCategory}
        active={active}
      />
      {isLoading ? (
        <Skeleton arr={Array.from({ length: 8 })} />
      ) : (
        <>
          {!searchTrending().length ? (
            <div className="flex  xl:justify-start flex-wrap gap-8 my-12 mx-auto">
              <h3 className="text-[#4effba] text-center w-full text-4xl  py-28 flex justify-center items-center">
                No Results Found
              </h3>
            </div>
          ) : (
            <>
              <p className=" text-2xl font-semibold text-[#4effba] my-12">
                {active} ({searchTrending()?.length})
              </p>
              <div className="flex  xl:justify-start flex-wrap gap-8 mb-12 mx-auto">
                {searchTrending()?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full sm:w-[47%] md:w-[30%] lg:w-[31%] xl:w-[23%] bg-[#1c463685] p-3 rounded-xl trend relative cursor-pointer overflow-hidden"
                    >
                      <div className="rate absolute top-4 left-4 z-20 bg-[#1c4636] p-1 rounded-xl">
                        <i className="fa-regular fa-star me-1 text-amber-300"></i>
                        {Math.round(item.vote_average * 10) / 10}
                      </div>
                      <div className="image-container h-[87%] overflow-hidden rounded-xl">
                        <Image
                          src={`${baseUrl}${item.poster_path}`}
                          width={300}
                          height={300}
                          className="w-full h-full trend-img"
                          alt={
                            item.title ||
                            item.original_title ||
                            item.name ||
                            item.original_name ||
                            "trending"
                          }
                        />
                      </div>
                      <h2 className="text-center font-bold mt-4 md:text-sm lg:text-base">
                        {item.title ||
                          item.original_title ||
                          item.name ||
                          item.original_name}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
      <div className="btn-group flex justify-between font-bold text-black mb-12">
        <button
          className="bg-[#4effba] p-5 rounded-xl"
          onClick={() => {
            handlePageChange(-1);
          }}
        >
          Prev Page
        </button>
        <button
          className="bg-[#4effba] p-5 rounded-xl"
          onClick={() => {
            handlePageChange(1);
          }}
        >
          Next Page
        </button>
      </div>
    </>
  );
}
