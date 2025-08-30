import { useContext, useCallback } from "react";
import { BookContext } from "../context/BookContext";
import { throttle } from "../utils/Throttle";

const SearchBar = () => {
  const { inputValue, setInputValue, handleSearch } = useContext(BookContext);

  const throttledSearch = useCallback(throttle(handleSearch, 1000), [
    handleSearch,
  ]);

  return (
    <form
      onSubmit={throttledSearch}
      className="flex justify-center mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-400"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search by title, author, or iSBN..."
        className="flex-grow p-3 outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-8 py-3 hover:bg-blue-700 rounded-tl-md rounded-bl-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
