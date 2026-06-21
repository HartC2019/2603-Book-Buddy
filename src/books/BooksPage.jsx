import { getBooks } from "../api/books";
import { useState, useEffect } from "react";
import BookList from "./BookList";
import "./books.css";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const syncBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    syncBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="books-page">
      <h1 className="books-header">Book Catalog</h1>
      <input
        className="search-bar"
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BookList books={filteredBooks} />
    </section>
  );
}
