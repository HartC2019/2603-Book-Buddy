import { Link } from "react-router";
import "./books.css";

export default function BookCard({ book }) {
  return (
    <li className="book-card">
      <Link to={`/books/${book.id}`}>
        <img className="book-cover" src={book.coverimage} alt={book.title} />
      </Link>

      <div className="book-info">
        <h2 className="book-title">
          <Link to={`/books/${book.id}`}>{book.title}</Link>
        </h2>

        <p className="book-author">{book.author}</p>

        <p className="book-description">{book.description.slice(0, 150)}...</p>

        <p
          className={`book-status ${
            book.available ? "available" : "unavailable"
          }`}
        >
          {book.available ? "Available" : "Checked Out"}
        </p>
      </div>
    </li>
  );
}
