import { API } from "./auth.js";

export async function getBooks() {
  const response = await fetch(API + "/books");
  const result = await response.json();

  if (!response.ok) {
    throw Error(result.message);
  }

  return result;
}

export async function getBook(id) {
  const response = await fetch(`${API}/books/${id}`);
  const result = await response.json();

  if (!response.ok) {
    throw Error(result.message);
  }

  return result;
}

export async function reserveBook(token, bookId) {
  const response = await fetch(`${API}/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      bookId,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw Error(result.message);
  }

  return result;
}

export async function returnBook(token, reservationId) {
  const response = await fetch(`${API}/reservations/${reservationId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw Error("Failed to return book");
  }

  return true;
}
