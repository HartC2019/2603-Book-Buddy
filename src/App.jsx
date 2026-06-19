import { Routes, Route } from "react-router";
import Layout from "./layout/Layout.jsx";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Error404 from "./Error404.jsx";
import AccountPage from "./account/AccountPage.jsx";
import BookDetails from "./books/BookDetails.jsx";
import BooksPage from "./books/BooksPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<BooksPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
