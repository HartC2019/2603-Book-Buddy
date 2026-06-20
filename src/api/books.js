import { API } from "./auth.js";

export async function getBooks() {
  const response = await fetch(API + "/books");

  const result = await response.json();

  if (!response.ok) {
    throw Error(result.message);
  }

  return result;
}
