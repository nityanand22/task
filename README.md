# Book Search App

A responsive React application to search for books using the [Open Library API](https://openlibrary.org/developers/api).  
Users can search by title, author, or ISBN, view paginated results, and enjoy a smooth, mobile-friendly experience.

## Features

- 🔍 **Search** for books by title, author, or ISBN
- 📚 **Paginated results** for easy browsing
- ⚡ **Throttled search** to prevent excessive API calls
- 📱 **Responsive design** for all screen sizes
- ⏳ **Loading spinner** for better UX
- ⚡ Optimized using **useCallback** hook for better performance.

## Tech Stack

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Open Library API](https://openlibrary.org/developers/api)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/book-search-app.git
   cd book-search-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
  components/
    Hero.jsx
    SearchBar.jsx
    SearchBookResult.jsx
    PaginationButtons.jsx
    Loader.jsx
  context/
    BookContext.jsx
  utils/
    Throttle.js
```

## How It Works

- The **Hero** section contains the main search bar.
- **SearchBar** lets users enter queries and submit searches.
- **BookContext** manages global state and handles API requests.
- **SearchBookResult** displays results with pagination.
- **Loader** shows a spinner during API calls.
- **PaginationButtons** allows navigation between result pages.
