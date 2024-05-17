import { Book } from './Book';

const URL_API = 'http://localhost:4730';

const fetchJson = <T>(url: string, init?: RequestInit) =>
  fetch(url, {
    ...init,
    headers: {
      ...init?.headers,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => (res.ok ? res.json() : Promise.reject(res))) as Promise<T>;

/**
 * Fetch all books
 * @returns list of books
 */
export const fetchBooks = () => fetchJson<Book[]>(`${URL_API}/books`);

/**
 * Fetch one book by isbn.
 * @param isbn isbn of book to fetch
 * @returns Book with given isbn
 */
export const fetchBook = (isbn: string) => fetchJson<Book>(`${URL_API}/books/${isbn}`);

/**
 * Update a book.
 * @param isbn isbn of book to update
 * @param book updated book object
 * @returns updated book object
 */
export const updateBook = (isbn: string, book: Book) =>
  fetchJson<Book>(`${URL_API}/books/${isbn}`, {
    method: 'put',
    body: JSON.stringify(book),
  });
