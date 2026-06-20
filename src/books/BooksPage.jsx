import { getBooks } from "../api/books";
import { useState, useEffect } from "react";
import BookList from "./BookList";
import "./books.css";

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  const syncBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    syncBooks();
  }, []);

  return (
    <section className="books-page">
      <h1 className="books-header">Book Catalog</h1>
      <BookList books={books} />
    </section>
  );
}
