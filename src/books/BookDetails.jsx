import "./books.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getBook } from "../api/books";

export default function BookDetails() {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    async function loadBook() {
      const data = await getBook(id);
      setBook(data);
    }

    loadBook();
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <section className="book-details">
      <section className="book-details">
        <img className="book-cover" src={book.coverimage} alt={book.title} />

        <div className="book-info">
          <h1 className="book-title">{book.title}</h1>
          <p className="book-author">{book.author}</p>
          <p className="book-description">{book.description}</p>
          <p
            className={`book-status ${
              book.available ? "available" : "unavailable"
            }`}
          >
            {book.available ? "Available" : "Checked Out"}
          </p>
        </div>
      </section>
    </section>
  );
}
