const PaginationButtons = ({ index, currentPage, handlePageChange, val }) => {
  return (
    <button
      key={index}
      className={`h-8 w-8 border border-black mx-1 rounded ${
        index === currentPage ? "bg-gray-500" : ""
      }`}
      onClick={() => handlePageChange(index)}
    >
      {val + 1}
    </button>
  );
};

export default PaginationButtons;
