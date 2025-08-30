import { createContext, useState } from "react";

export const BookContext = createContext({});

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await fetch(
      `https://openlibrary.org/search.json?title=${inputValue}`
    );
    const result = await data.json();
    setBooks(result.docs);
    setLoading(false);
  };

  const value = {
    inputValue,
    setInputValue,
    books,
    setBooks,
    handleSearch,
    loading,
    setLoading,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export default BookContextProvider;
