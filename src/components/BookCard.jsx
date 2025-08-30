const BookCard = ({ book, index }) => {
  return (
    <div
      key={index}
      className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition"
    >
      <div className="w-full max-h-64 h-56 rounded mb-3 flex items-center justify-center overflow-hidden">
        {
          <img
            src={
              book.cover_i
                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                : "https://www.garvthakur.com/DefaultImages/preview.jpg" // default image
            }
            alt="book image"
            className="object-contain w-full h-full"
          />
        }
      </div>
      <h4 className="font-semibold text-gray-800">{book.title}</h4>
      <p className="text-gray-600 text-sm">
        {Array.isArray(book.author_name) ? book.author_name.join(", ") : ""}
      </p>
      <p className="text-gray-500 text-xs">{book.first_publish_year}</p>
    </div>
  );
};

export default BookCard;
