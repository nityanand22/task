import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-center py-12 px-4 flex flex-col gap-y-4 items-center">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-2">
        Discover Your Next Favorite Book
      </h1>
      <p className="text-gray-600 mb-6 text-lg md:textxl lg:text-2xl">
        Search through millions of books powered by Open Library API.
      </p>

      <div className="w-[80%] sm:w-[50%] bg-white p-6 rounded-lg shadow-lg">
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
