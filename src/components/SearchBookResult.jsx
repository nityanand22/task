import { useContext, useEffect, useState } from "react";
import { BookContext } from "../context/BookContext";
import Loader from "./Loader";
import BookCard from "./BookCard";
import PaginationButtons from "./PaginationButtons";

const SearchBookResult = () => {
  const { books, loading } = useContext(BookContext);
  const [currentPage, setCurrentPage] = useState(0);

  /** Pagination Logic Start */
  const pageSize = 10;
  const noOfPages = Math.ceil(books.length / pageSize);
  const start = currentPage * pageSize;
  const end = start + pageSize;
  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePreviousPage = () => setCurrentPage((prev) => prev - 1);
  const handlePageChange = (n) => setCurrentPage(n);
  /** Pagination logic end */

  useEffect(() => {
    setCurrentPage(0);
  }, [books]);

  if (loading && books.length === 0) {
    return <Loader />;
  }

  if (books.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <h1 className="text-black text-xl sm:text-3xl">No results found!</h1>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Search Results
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {books.slice(start, end).map((book, idx) => (
          <BookCard book={book} index={idx} />
        ))}
      </div>
      <div className="flex items-center gap-0 sm:gap-2 mt-4 justify-center">
        <button
          className="h-8 w-8 border border-black mx-1 rounded disabled:opacity-50"
          disabled={currentPage === 0}
          onClick={handlePreviousPage}
        >
          ⬅️
        </button>
        {[...Array(noOfPages).keys()].map((val, index) => (
          <PaginationButtons
            index={index}
            val={val}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        ))}
        <button
          className="h-8 w-8 border border-black mx-1 rounded disabled:opacity-50"
          disabled={currentPage === noOfPages - 1}
          onClick={handleNextPage}
        >
          ➡️
        </button>
      </div>
    </div>
  );
};

export default SearchBookResult;
