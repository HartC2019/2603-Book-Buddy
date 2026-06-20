import BookCard from "./BookCard";
import "./books.css";

export default function BookList({ books }) {
  console.log(books[0]);
  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book}></BookCard>
      ))}
    </ul>
  );
}
